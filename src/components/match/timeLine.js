//
// import React,{Component} from "react";
//
// import 'react-vertical-timeline-component/style.min.css';
// import Timeline from 'react-horizontal-timeline';
//
// const data = [
//   { name: "Wake up", dataType: "user-data", date: "2012-09-28T07:00:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" }  },
//   { name: "Breakfast", dataType: "user-data", date: "2012-09-28T07:30:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
//   { name: "Leave kids at school", dataType: "user-data", date: "2012-09-28T07:45:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
//   { name: "Check email", dataType: "user-data", date: "2012-09-28T08:00:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
//   { name: "Lunch", dataType: "user-data", date: "2012-09-28T11:30:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" } },
//   { name: "Send report", dataType: "user-data", date: "2012-09-28T13:15:00", isSelected: false, isNotPermitted: true, r: 7, cy: 50, cx: 0, activity: null },
//   { name: "Pick kids", dataType: "user-data", date: "2012-09-28T17:16:00", isSelected: false, isNotPermitted: true, r: 7, cy: 50, cx: 0, activity: null },
//   { name: "Dinner", dataType: "user-data", date: "2012-09-28T18:13:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity B", startTime: "2012-09-28T17:45:00", endTime: "2012-09-28T20:30:00" } },
//   { name: "Watch a movie", dataType: "user-data", date: "2012-09-28T20:16:00", isSelected: false, isNotPermitted: false, r: 7, cy: 50, cx: 0, activity: { name: "Example Activity B", startTime: "2012-09-28T17:45:00", endTime: "2012-09-28T20:30:00" } },
//   { name: "Go to sleep", dataType: "user-data", date: "2012-09-28T22:00:00", isSelected: false, isNotPermitted: true, r: 7, cy: 50, cx: 0, activity: null },
//   { name: "Example system event A", dataType: "system-data", date: "2012-09-28T14:30:20", isSelected: false, isNotPermitted: true, y: 42, cx: 0 },
//   { name: "Example system event B", dataType: "system-data", date: "2012-09-28T17:45:00", isSelected: false, isNotPermitted: true, y: 42, cx: 0 },
//   { name: "Example system event C", dataType: "system-data", date: "2012-09-28T19:00:15", isSelected: false, isNotPermitted: false, y: 42, cx: 0 },
//   { name: "Example system event D", dataType: "system-data", date: "2012-09-28T22:20:00", isSelected: false, isNotPermitted: false, y: 42, cx: 0 }
// ]
//
// const activityDataSample = [
//   undefined,
//   { name: "Example Activity A", startTime: "2012-09-28T06:50:00", endTime: "2012-09-28T11:45:00" },
//   { name: "Example Activity B", startTime: "2012-09-28T10:50:00", endTime: "2012-09-28T13:45:00" },
//   { name: "Example Activity C", startTime: "2012-09-28T16:50:00", endTime: "2012-09-28T17:45:00" }
// ]
//
// export default class App extends Component {
//
//   render() {
//     return (
//       <div>
//         {/*<div className="App">*/}
//           {/*<header className="App-header">*/}
//             {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
//             {/*<h1 className="App-title">Welcome to React</h1>*/}
//           {/*</header>*/}
//         {/*</div>*/}
//
//         <Timeline
//           data={data}
//           activityObject={activityDataSample[0]}
//           eventTypeObject={{userEvents: true, systemEvents: true}}
//         />
//
//       </div>
//     );
//   }
// }