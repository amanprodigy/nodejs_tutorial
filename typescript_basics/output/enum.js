var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 100] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 120] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 121] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 122] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 123] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 124] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 125] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
if (day === DaysOfTheWeek.MON) {
    console.log('Go to work');
}
