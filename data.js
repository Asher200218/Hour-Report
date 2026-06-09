// Shared data + config for all Hour Report pages.
const DATA = {"teams":[{"group":"Group 1","team":"Team 1","workers":[{"id":1,"name":"Worker 1","role":"Lead"},{"id":2,"name":"Worker 2","role":"Designer"},{"id":3,"name":"Worker 3","role":"Designer"},{"id":4,"name":"Worker 4","role":"Designer"},{"id":5,"name":"Worker 5","role":"Designer"},{"id":6,"name":"Worker 6","role":"Designer"},{"id":7,"name":"Worker 7","role":"Designer"},{"id":8,"name":"Worker 8","role":"Designer"},{"id":9,"name":"Worker 9","role":"Designer"},{"id":10,"name":"Worker 10","role":"Designer"},{"id":11,"name":"Worker 11","role":"Checker"},{"id":12,"name":"Worker 12","role":"Checker"},{"id":13,"name":"Worker 13","role":"Checker"},{"id":14,"name":"Worker 14","role":"Checker"}]},{"group":"Group 1","team":"Team 2","workers":[{"id":15,"name":"Worker 15","role":"Lead"},{"id":16,"name":"Worker 16","role":"Designer"},{"id":17,"name":"Worker 17","role":"Designer"},{"id":18,"name":"Worker 18","role":"Designer"},{"id":19,"name":"Worker 19","role":"Designer"},{"id":20,"name":"Worker 20","role":"Designer"},{"id":21,"name":"Worker 21","role":"Designer"},{"id":22,"name":"Worker 22","role":"Designer"},{"id":23,"name":"Worker 23","role":"Checker"},{"id":24,"name":"Worker 24","role":"Checker"}]},{"group":"Group 1","team":"Team 3","workers":[{"id":25,"name":"Worker 25","role":"Lead"},{"id":26,"name":"Worker 26","role":"Support"},{"id":27,"name":"Worker 27","role":"Checker"},{"id":28,"name":"Worker 28","role":"Support"},{"id":29,"name":"Worker 29","role":"Engineer"}]},{"group":"Group 1","team":"Team 4","workers":[{"id":30,"name":"Worker 30","role":"Specialist"}]}],"tasks":["订单设计","订单校对","订单沟通","专项订单支持","Key user类支持","部门内部支持","跨部门支持","会议/培训","加班","休假"]};
const TASK_EN = ["Order design","Order proofreading","Order communication","Special order support","Key-user support","Internal dept. support","Cross-dept. support","Meeting / training","Overtime","Leave"];
const LEAVE_CATS = ["Annual leave","Sick leave","Maternity/paternity/parental leave","Comp off","Overtime"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DOW = ["Su","Mo","Tu","We","Th","Fr","Sa"];
const YEAR = 2026;

// ---- Firebase cloud sync config (filled in after project setup) ----
const firebaseConfig = {
  // FIREBASE_CONFIG_PLACEHOLDER
};
