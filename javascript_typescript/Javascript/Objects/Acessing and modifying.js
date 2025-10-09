const profile = {
    name: "devraj",
    skill: "js",
    level: "Intermediate"
}
profile.level = "Advance"
profile.location = "India"
delete profile.skill
console.log("name" in profile)
console.log("skill" in profile)

console.log(profile)