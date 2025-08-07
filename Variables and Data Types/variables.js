// | Keyword | Scope    | Reassignable | Redeclarable | Hoisted?                | Use Case                |
// | ------- | -------- | ------------ | ------------ | ----------------------- | ----------------------- |
// | `var`   | Function | ✅ Yes        | ✅ Yes        | ✅ Yes (but undefined)   | Legacy, avoid using     |
// | `let`   | Block    | ✅ Yes        | ❌ No         | ✅ Yes (not initialized) | Preferred for variables |
// | `const` | Block    | ❌ No         | ❌ No         | ✅ Yes (not initialized) | Preferred for constants |

let name = "santa";
var nam1 = "manta";
const PI = 3.14;