function checkFlightSchedule(){
    console.log('查航班');

    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
    };
    
    return scheduleInfo.start;
}

var startTime = checkFlightSchedule();
console.log(startTime);