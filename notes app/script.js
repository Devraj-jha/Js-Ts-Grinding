// ===== NOTES APPLICATION - JAVASCRIPT IMPLEMENTATION =====
// This is a complete Single Page Application (SPA) built with vanilla JavaScript
// Think of it like building a house: we need a blueprint (state), workers (functions), 
// and materials (DOM elements) that all work together

        // ===== APPLICATION STATE MANAGEMENT =====
        // State is like the brain of our application - it remembers everything
        // When state changes, our UI needs to update to reflect those changes
        // This is the CORE CONCEPT that React and all modern frameworks are built on
        const appState = {
            // This array holds ALL our note objects
            // Each note will be an object with properties like id, title, content, etc.
            notes: [], 
            
            // Tracks which filter is currently active
            // 'all' = show all notes, 'important' = show only important notes, etc.
            currentFilter: 'all', 
            
            // How to order our notes when displaying them
            // 'newest' = most recent first, 'oldest' = oldest first, 'title' = alphabetical
            currentSort: 'newest', 
            
            // When editing a note, we store its ID here
            // When null, it means we're creating a new note instead of editing
            editingNoteId: null, 
            
            // What the user has typed in the search box
            // We use this to filter notes by title, content, or tags
            searchQuery: '' 
        };

        // ===== DOM ELEMENT REFERENCES =====
        // Instead of searching for elements every time we need them, we store references
        // This is like saving someone's phone number instead of looking it up every time
        // It makes our code faster and more readable
        const domElements = {
            // The form where users create/edit notes
            noteForm: document.getElementById('noteForm'),
            
            // Input field for note title
            noteTitle: document.getElementById('noteTitle'),
            
            // Textarea for note content
            noteContent: document.getElementById('noteContent'),
            
            // Input for tags (comma separated)
            noteTags: document.getElementById('noteTags'),
            
            // Checkbox to mark note as important
            noteImportant: document.getElementById('noteImportant'),
            
            // Container div where all note cards will be displayed
            notesContainer: document.getElementById('notesContainer'),
            
            // Message shown when there are no notes
            emptyState: document.getElementById('emptyState'),
            
            // Button to start creating a new note
            newNoteBtn: document.getElementById('newNoteBtn'),
            
            // Button to cancel editing/creation
            cancelBtn: document.getElementById('cancelBtn'),
            
            // Search input box
            searchInput: document.getElementById('searchInput'),
            
            // All the filter buttons (All Notes, Important, Recent)
            filterButtons: document.querySelectorAll('.filter-btn'),
            
            // Dropdown to filter by specific tags
            tagFilter: document.getElementById('tagFilter'),
            
            // Dropdown to change sort order
            sortSelect: document.getElementById('sortSelect'),
            
            // The title of our form (changes between "Create New Note" and "Edit Note")
            formTitle: document.getElementById('formTitle'),
            
            // Element that shows total note count
            totalNotes: document.getElementById('totalNotes'),
            
            // Element that shows important note count
            importantNotes: document.getElementById('importantNotes')
        };

        // ===== INITIALIZATION FUNCTION =====
        // This is like the "start button" for our entire application
        // When the page loads, this function gets everything ready
        function init() {
            // STEP 1: Load any previously saved notes from the browser's storage
            // This makes our app "remember" notes even after closing the browser
            loadNotesFromStorage();
            
            // STEP 2: Make all the buttons and inputs actually do something
            // Without this, our app would be like a car with no engine - looks nice but doesn't work
            setupEventListeners();
            
            // STEP 3: Show the notes on the screen
            // This takes our data (appState.notes) and turns it into visible HTML
            renderNotes();
            
            // STEP 4: Update the statistics (total notes, important notes count)
            updateStatistics();
            
            // At this point, our app is fully loaded and ready for user interaction!
        }

        // ===== EVENT LISTENER SETUP =====
        // Event listeners are like "waiting for something to happen"
        // When the user clicks, types, or submits, these functions spring into action
        function setupEventListeners() {
            // When the user submits the note form (clicks "Save Note" or presses Enter)
            domElements.noteForm.addEventListener('submit', handleFormSubmit);
            
            // When the user clicks the "New Note" button
            domElements.newNoteBtn.addEventListener('click', showNewNoteForm);
            
            // When the user clicks the "Cancel" button
            domElements.cancelBtn.addEventListener('click', resetForm);
            
            // When the user types in the search box (triggers on every keystroke)
            domElements.searchInput.addEventListener('input', handleSearch);
            
            // Add click listeners to ALL filter buttons
            // We use forEach because filterButtons is a NodeList (like an array of buttons)
            domElements.filterButtons.forEach(button => {
                button.addEventListener('click', handleFilterChange);
            });
            
            // When the user selects a different tag from the dropdown
            domElements.tagFilter.addEventListener('change', renderNotes);
            
            // When the user selects a different sort option
            domElements.sortSelect.addEventListener('change', handleSortChange);
            
            // Now our app is "listening" for all possible user interactions!
        }

        // ===== NOTE DATA MODEL =====
        // This function is like a factory that creates consistent note objects
        // Every note we create will have the same structure, which makes our code predictable
        function createNote(title, content, tags = [], important = false) {
            // Return a new note object with all the properties we need
            return {
                // Generate a unique ID using the current timestamp
                // Date.now() gives milliseconds since 1970, which is always unique
                // We convert to string because IDs are often treated as strings
                id: Date.now().toString(),
                
                // The note's title (what the user entered)
                title,
                
                // The main content of the note
                content,
                
                // Handle tags whether they come as an array or comma-separated string
                // Array.isArray(tags) ? tags - if it's already an array, use it as-is
                // : tags.split(',').map(tag => tag.trim()) - if it's a string, split by commas and trim spaces
                tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()),
                
                // Whether this note is marked as important
                important,
                
                // When the note was created (ISO string is a standard date format)
                createdAt: new Date().toISOString(),
                
                // When the note was last updated (starts same as createdAt)
                updatedAt: new Date().toISOString()
            };
        }

        // ===== FORM HANDLING FUNCTIONS =====
        // This is called when the user submits the note form
        function handleFormSubmit(e) {
            // Prevent the default form submission behavior
            // Without this, the page would refresh and we'd lose all our data!
            e.preventDefault();
            
            // Get the current values from all the form inputs
            // .trim() removes any extra spaces from the beginning and end
            const title = domElements.noteTitle.value.trim();
            const content = domElements.noteContent.value.trim();
            const tags = domElements.noteTags.value;
            const important = domElements.noteImportant.checked;
            
            // Basic validation - make sure we have at least a title and content
            if (!title || !content) {
                alert('Please fill in both title and content');
                return; // Stop the function here if validation fails
            }
            
            // Check if we're editing an existing note or creating a new one
            if (appState.editingNoteId) {
                // We're in edit mode - update the existing note
                updateNote(appState.editingNoteId, title, content, tags, important);
            } else {
                // We're in create mode - add a new note
                addNote(title, content, tags, important);
            }
            
            // Reset the form to its empty state
            resetForm();
            
            // Update the UI to show the new/changed note
            renderNotes();
            
            // Update the statistics display
            updateStatistics();
            
            // At this point, the user's changes are saved and visible!
        }

        // ===== NOTE MANAGEMENT FUNCTIONS =====
        // Adds a brand new note to our application
        function addNote(title, content, tags, important) {
            // Use our note factory to create a consistent note object
            const newNote = createNote(title, content, tags, important);
            
            // Add the new note to the BEGINNING of our notes array
            // unshift() puts it at index 0, so newest notes show first
            appState.notes.unshift(newNote);
            
            // Save the updated notes to localStorage so they persist
            saveNotesToStorage();
            
            // The note is now part of our application state and saved for later!
        }

        // Updates an existing note with new data
        function updateNote(id, title, content, tags, important) {
            // Find the index of the note we want to update
            // findIndex() loops through the array and returns the position of the matching note
            const noteIndex = appState.notes.findIndex(note => note.id === id);
            
            // If we found the note (noteIndex won't be -1)
            if (noteIndex !== -1) {
                // Update all the properties of the found note
                appState.notes[noteIndex].title = title;
                appState.notes[noteIndex].content = content;
                appState.notes[noteIndex].tags = Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim());
                appState.notes[noteIndex].important = important;
                
                // Update the "last updated" timestamp
                appState.notes[noteIndex].updatedAt = new Date().toISOString();
                
                // Save the changes to localStorage
                saveNotesToStorage();
            }
            
            // The note has been updated in memory and saved to disk!
        }

        // Removes a note from our application
        function deleteNote(id) {
            // Confirm with the user before deleting (safety measure!)
            if (confirm('Are you sure you want to delete this note?')) {
                // Filter out the note with the matching ID
                // filter() creates a new array with only the notes that DON'T match the ID
                appState.notes = appState.notes.filter(note => note.id !== id);
                
                // Save the updated (smaller) array to localStorage
                saveNotesToStorage();
                
                // Re-render the notes (now without the deleted one)
                renderNotes();
                
                // Update the statistics (total count will decrease)
                updateStatistics();
            }
            
            // If the user clicked "Cancel", nothing happens - the note stays safe!
        }

        // Toggles the important status of a note (on/off)
        function toggleImportant(id) {
            // Find the actual note object (not just its index)
            const note = appState.notes.find(note => note.id === id);
            
            // If we found the note
            if (note) {
                // Flip the important status (true becomes false, false becomes true)
                note.important = !note.important;
                
                // Update the "last updated" timestamp
                note.updatedAt = new Date().toISOString();
                
                // Save the change
                saveNotesToStorage();
                
                // Update the UI to show the new important status
                renderNotes();
                
                // Update statistics (important count might change)
                updateStatistics();
            }
        }

        // ===== UI RENDERING FUNCTIONS =====
        // This is the most important function for displaying data to users
        // It takes our current state and turns it into visible HTML
        function renderNotes() {
            // STEP 1: Get the notes that should be visible based on current filters/search
            const filteredNotes = getFilteredNotes();
            
            // STEP 2: Show or hide the "no notes" message
            // If we have notes, hide the empty state; if no notes, show it
            // classList.toggle('hidden', condition) adds 'hidden' class if condition is true
            domElements.emptyState.classList.toggle('hidden', filteredNotes.length > 0);
            
            // STEP 3: Clear the current notes display
            // We're about to rebuild it from scratch
            domElements.notesContainer.innerHTML = '';
            
            // STEP 4: Create and add each note card to the container
            filteredNotes.forEach(note => {
                // createNoteElement builds the HTML for a single note
                const noteElement = createNoteElement(note);
                
                // Add the note card to our container
                domElements.notesContainer.appendChild(noteElement);
            });
            
            // STEP 5: Update the tag filter dropdown with current tags
            updateTagFilter();
            
            // Now our UI perfectly matches our current application state!
        }

        // Creates the HTML structure for a single note card
        function createNoteElement(note) {
            // Create a new div element that will become our note card
            const noteCard = document.createElement('div');
            
            // Set CSS classes for styling
            // If the note is important, add the 'important' class for special styling
            noteCard.className = `note-card ${note.important ? 'important' : ''}`;
            
            // Store the note's ID as a data attribute so we can find it later
            noteCard.dataset.id = note.id;
            
            // Format the dates for human-readable display
            const createdDate = new Date(note.createdAt).toLocaleDateString();
            const updatedDate = new Date(note.updatedAt).toLocaleDateString();
            
            // Build the HTML content using template literals (backticks)
            // This is much cleaner than concatenating strings with +
            noteCard.innerHTML = `
                <h3 class="note-title">${escapeHtml(note.title)}</h3>
                <div class="note-meta">
                    <span>Created: ${createdDate}</span>
                    <span>Updated: ${updatedDate}</span>
                </div>
                <div class="note-content">${escapeHtml(note.content)}</div>
                ${note.tags.length > 0 ? `
                    <div class="note-tags">
                        ${note.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="note-actions">
                    <button class="btn btn-primary edit-btn">Edit</button>
                    <button class="btn ${note.important ? 'btn-warning' : 'btn-outline'} important-btn">
                        ${note.important ? 'Important' : 'Mark Important'}
                    </button>
                    <button class="btn btn-danger delete-btn">Delete</button>
                </div>
            `;
            
            // Now we have the HTML structure, but the buttons don't do anything yet
            // We need to attach event listeners to make them interactive
            
            // Find the buttons we just created inside this note card
            const editBtn = noteCard.querySelector('.edit-btn');
            const importantBtn = noteCard.querySelector('.important-btn');
            const deleteBtn = noteCard.querySelector('.delete-btn');
            const contentEl = noteCard.querySelector('.note-content');
            
            // Make the Edit button work
            editBtn.addEventListener('click', () => editNote(note.id));
            
            // Make the Important button work
            importantBtn.addEventListener('click', () => toggleImportant(note.id));
            
            // Make the Delete button work
            deleteBtn.addEventListener('click', () => deleteNote(note.id));
            
            // Make the content expandable on click
            contentEl.addEventListener('click', () => {
                contentEl.classList.toggle('expanded');
            });
            
            // Return the fully built and interactive note card
            return noteCard;
        }

        // ===== FILTERING AND SORTING FUNCTIONS =====
        // This is where we apply all the user's filtering preferences
        function getFilteredNotes() {
            // Start with a copy of all notes (using spread operator [...array])
            // We don't want to modify the original array
            let filteredNotes = [...appState.notes];
            
            // APPLY SEARCH FILTER if there's a search query
            if (appState.searchQuery) {
                // Convert search query to lowercase for case-insensitive matching
                const query = appState.searchQuery.toLowerCase();
                
                // Filter notes to only those that match the search
                filteredNotes = filteredNotes.filter(note => 
                    // Check if search appears in title (case insensitive)
                    note.title.toLowerCase().includes(query) || 
                    
                    // OR in content (case insensitive)
                    note.content.toLowerCase().includes(query) ||
                    
                    // OR in any tag (using some() to check if ANY tag matches)
                    note.tags.some(tag => tag.toLowerCase().includes(query))
                );
            }
            
            // APPLY CATEGORY FILTER (All, Important, Recent)
            switch (appState.currentFilter) {
                case 'important':
                    // Only show notes marked as important
                    filteredNotes = filteredNotes.filter(note => note.important);
                    break;
                    
                case 'recent':
                    // Calculate date from one week ago
                    const oneWeekAgo = new Date();
                    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                    
                    // Only show notes updated in the last week
                    filteredNotes = filteredNotes.filter(note => new Date(note.updatedAt) > oneWeekAgo);
                    break;
                    
                // 'all' filter doesn't need special handling - show everything
            }
            
            // APPLY TAG FILTER if a specific tag is selected
            const selectedTag = domElements.tagFilter.value;
            if (selectedTag) {
                // Only show notes that have the selected tag
                filteredNotes = filteredNotes.filter(note => note.tags.includes(selectedTag));
            }
            
            // FINALLY: Apply sorting and return the final result
            return sortNotes(filteredNotes, appState.currentSort);
        }

        // Sorts the notes based on the current sort preference
        function sortNotes(notes, sortBy) {
            // Create a copy to avoid modifying the original array
            const sortedNotes = [...notes];
            
            // Apply different sorting logic based on the sortBy parameter
            switch (sortBy) {
                case 'newest':
                    // Sort by creation date, newest first
                    // Convert dates to Date objects and subtract to get numeric comparison
                    return sortedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    
                case 'oldest':
                    // Sort by creation date, oldest first
                    return sortedNotes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                    
                case 'title':
                    // Sort alphabetically by title
                    // localeCompare handles special characters and case sensitivity properly
                    return sortedNotes.sort((a, b) => a.title.localeCompare(b.title));
                    
                default:
                    // If we don't recognize the sort method, return as-is
                    return sortedNotes;
            }
        }

        // ===== EVENT HANDLER FUNCTIONS =====
        // Called every time the user types in the search box
        function handleSearch(e) {
            // Update our search query state with what the user typed
            appState.searchQuery = e.target.value;
            
            // Re-render notes to show only those that match the search
            renderNotes();
        }

        // Called when user clicks a filter button (All, Important, Recent)
        function handleFilterChange(e) {
            // First, remove 'active' class from ALL filter buttons
            domElements.filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Then, add 'active' class to the clicked button
            e.target.classList.add('active');
            
            // Update our state with the new filter
            appState.currentFilter = e.target.dataset.filter;
            
            // Re-render notes with the new filter applied
            renderNotes();
        }

        // Called when user changes the sort dropdown
        function handleSortChange(e) {
            // Update our sort preference state
            appState.currentSort = e.target.value;
            
            // Re-render notes with the new sort order
            renderNotes();
        }

        // Shows the form for creating a brand new note
        function showNewNoteForm() {
            // Reset the form to clear any previous values
            resetForm();
            
            // Update the form title
            domElements.formTitle.textContent = 'Create New Note';
            
            // Scroll the form into view so user doesn't have to manually scroll
            domElements.noteForm.scrollIntoView({ behavior: 'smooth' });
        }

        // Populates the form with an existing note's data for editing
        function editNote(id) {
            // Find the note we want to edit
            const note = appState.notes.find(note => note.id === id);
            
            // If we found the note
            if (note) {
                // Fill the form inputs with the note's current data
                domElements.noteTitle.value = note.title;
                domElements.noteContent.value = note.content;
                domElements.noteTags.value = note.tags.join(', ');
                domElements.noteImportant.checked = note.important;
                
                // Remember that we're editing this specific note
                appState.editingNoteId = id;
                
                // Update the form title to indicate we're editing
                domElements.formTitle.textContent = 'Edit Note';
                
                // Scroll the form into view
                domElements.noteForm.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Resets the form to its initial empty state
        function resetForm() {
            // Clear all form inputs
            domElements.noteForm.reset();
            
            // Clear the editing state (we're not editing anything now)
            appState.editingNoteId = null;
            
            // Reset the form title
            domElements.formTitle.textContent = 'Create New Note';
        }

        // ===== UTILITY FUNCTIONS =====
        // Updates the tag filter dropdown with all tags currently in use
        function updateTagFilter() {
            // Get ALL unique tags from ALL notes
            // flatMap() gets all tags arrays and flattens them into one array
            // new Set() removes duplicates
            // [...spread] converts the Set back to an array
            // sort() arranges them alphabetically
            const allTags = [...new Set(appState.notes.flatMap(note => note.tags))].sort();
            
            // Clear the current dropdown options
            domElements.tagFilter.innerHTML = '<option value="">All Tags</option>';
            
            // Add each unique tag as an option in the dropdown
            allTags.forEach(tag => {
                // Create a new option element
                const option = document.createElement('option');
                
                // Set the value and display text to the tag name
                option.value = tag;
                option.textContent = tag;
                
                // Add the option to the dropdown
                domElements.tagFilter.appendChild(option);
            });
        }

        // Updates the statistics display (total notes, important notes)
        function updateStatistics() {
            // Update total notes count
            domElements.totalNotes.textContent = appState.notes.length;
            
            // Update important notes count (filter notes where important is true)
            domElements.importantNotes.textContent = appState.notes.filter(note => note.important).length;
        }

        // Security function to prevent XSS (Cross-Site Scripting) attacks
        // If someone puts malicious JavaScript in a note title, this prevents it from running
        function escapeHtml(text) {
            // Create a temporary div element
            const div = document.createElement('div');
            
            // Set its text content (this automatically escapes HTML characters)
            div.textContent = text;
            
            // Get the innerHTML back (now safely escaped)
            return div.innerHTML;
            
            // Example: if text was "<script>alert('hack')</script>"
            // This returns "&lt;script&gt;alert('hack')&lt;/script&gt;"
            // Which displays as text instead of executing as code
        }

        // ===== LOCAL STORAGE FUNCTIONS =====
        // Saves our notes to the browser's local storage
        // This makes our data persist between browser sessions
        function saveNotesToStorage() {
            // Convert our notes array to a JSON string
            // localStorage can only store strings, not objects
            localStorage.setItem('notesAppData', JSON.stringify(appState.notes));
            
            // Now our notes are safely saved in the browser!
        }

        // Loads notes from the browser's local storage
        function loadNotesFromStorage() {
            // Try to get saved notes from localStorage
            const storedNotes = localStorage.getItem('notesAppData');
            
            // If we found saved notes
            if (storedNotes) {
                // Parse the JSON string back into a JavaScript array
                // JSON.parse() is the opposite of JSON.stringify()
                appState.notes = JSON.parse(storedNotes);
            }
            
            // If no saved notes were found, appState.notes remains an empty array
        }

        // ===== INITIALIZE APPLICATION =====
        // This is the final piece that starts everything
        // We wait for the DOM to be fully loaded before running our init function
        // If we tried to run it earlier, our DOM elements might not exist yet
        document.addEventListener('DOMContentLoaded', init);
        
        // AND THAT'S IT! Our application is now complete and ready to use.
        // When someone loads the page, init() runs and sets everything up.
        // Users can create, read, update, delete, search, filter, and sort notes.
        // All data is automatically saved and persists between browser sessions.
        // We've built a fully functional web application from scratch!