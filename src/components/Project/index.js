// import React, { useState } from 'react';

// const Project = () => {

//     const [photos] = useState([
//         {
//             Title: 'Movie Night',
//             GitHub: 'https://github.com/JessicaAKelley/movie-night',
//             Deployed: 'https://xxundeadxxdemon.github.io/movie-night/',
//         },
//         {
//             Title: 'Hearthstone Reviewer',
//             GitHub: 'https://github.com/JessicaAKelley/hearthstone_reviewer',
//             Deployed: 'https://hearthstone-reviewer.herokuapp.com/',
//         },
//         {
//             Title: 'Weather Dashboard',
//             GitHub: 'https://github.com/JessicaAKelley/weather-dashboard',
// 			Deployed: 'https://jessicaakelley.github.io/weather-dashboard/',
//         },
//         {
//             Title: 'Password Generator',
//             GitHub: 'https://github.com/JessicaAKelley/password-generator',
// 			Deployed: 'https://jessicaakelley.github.io/password-generator/',
//         },

//     ]);

//     return (
//         <div>
//         <div className="flex-row">
//             {photos.map((image, i) => (
//             <div key={image.title}>
//                 <div>
//                 {image.title}
//                 </div>
//                 <div>
//                 <a href={image.link}>Deployed Application</a>
//                 </div>
//                 <div>
//                 <a href={image.github}>GitHub Repository</a>
//                 </div>
//                 {/* <img
//                 src={require(`../../assets/small/${i}.png`).default}
//                 alt={image.title}
//                 className="img-thumbnail mx-1"
//                 key={i}
//                 /> */}
//             </div>
//             ))}
//         </div>
//         </div>
//     );
// };

// export default Project;