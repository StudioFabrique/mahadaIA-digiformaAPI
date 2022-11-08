// import {createServer} from "@graphql-yoga/node"
// import fetch from "node-fetch"


// const typeDefinitions = `
// type Abandons {
//   abandonEndDate: String
//   abandonStartDate: String
//   commentJustifiedAbsence: String
//   isJustified: Boolean
// },

// type TrainingSessions {
//   name: String
//   abandons: [Abandons]
// },

// type Trainees {
//   birthdate: String
//   email: String
//   firstname: String
//   handicaped: Boolean
//   lastDiploma: String
//   lastname: String
//   nationality: String
//   phone: String
//   roadAddress: String
//   status: String
//   trainingSessions: [TrainingSessions]
// },

// type Data {
//   trainees: [Trainees]
// },

// type AutogeneratedMainType {
//   data: Data
// },

// type Query {
//     clients: [Client]
//     asteroidsNear: AsteroidsNear
// },





// type Mutation {
//   addClient( name: String, lastname: String): Client
// },
// type Client {
//   name:String
//   lastname:String
// },
// type AsteroidsNear {
//   element_count: Int,
//   near_earth_objects: NearEarthObjects,
//   links: Links
// },
// type Links {
//   next:String
//   prev:String
//   self:String
// },
// type MissDistance {
//   astronomical: String
//   lunar: String
//   kilometers: String
//   miles: String
// },

// type RelativeVelocity {
//   kilometers_per_second: String
//   kilometers_per_hour: String
//   miles_per_hour: String
// },

// type CloseApproachData {
//   close_approach_date: String
//   close_approach_date_full: String
//   epoch_date_close_approach: Int
//   orbiting_body: String
//   miss_distance: MissDistance
//   relative_velocity: RelativeVelocity
// },

// type Feet {
//   estimated_diameter_min: Float
//   estimated_diameter_max: Float
// },

// type Miles {
//   estimated_diameter_min: Float
//   estimated_diameter_max: Float
// }

// type Meters {
//   estimated_diameter_min: Float
//   estimated_diameter_max: Float
// },

// type Kilometers {
//   estimated_diameter_min: Float
//   estimated_diameter_max: Float
// },

// type EstimatedDiameter {
//   feet: Feet
//   miles: Miles
//   meters: Meters
//   kilometers: Kilometers
// },

// type Today {
//   id: String
//   neo_reference_id: String
//   name: String
//   nasa_jpl_url: String
//   absolute_magnitude_h: Float
//   is_potentially_hazardous_asteroid: Boolean
//   is_sentry_object: Boolean
//   close_approach_data: [CloseApproachData]
//   estimated_diameter: EstimatedDiameter
//   links: Links
// },

// type NearEarthObjects {
//   today: [Today]
// },

// `;

// const resolvers = {
//   Query: {
//     clients: () => {
//       return clients;
//     },
//     asteroidsNear: async () => {
//      let res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-05-10&end_date=2022-05-10&api_key=DEMO_KEY`)
//      res = await res.text();
//      res = res.replaceAll("2022-05-10", "today");
//      res = JSON.parse(res);
//      console.log(res);
//      return res;
//     },
//     trainees: async () => {
//       let res = fetch('https://app.digiforma.com/api/v1/graphiql', {
//               method: 'POST',
//             headers: { Authorization: "Bearer " + accessToken,
//                       'Content-Type': 'application/json' },
//                       body: JSON.stringify({ query:`query {
//                         trainees{
//                 lastname
//                 firstname
//                 trainingSessions {
//                   name
//                   abandons {
//                     abandonStartDate
//                     abandonEndDate
//                     isJustified
//                     commentJustifiedAbsence
//                   }
          
//                 }
//                 nationality
//                 birthdate
//                 email
//                 roadAddress
//                 phone
//                 lastDiploma
//                 status
//                 handicaped
          
//               }
          
//             }` 
//             }),
//           })
//       res = JSON.parse(res);
//       console.log(res);
//       return res;
//      }
//   },
//   Mutation: {
//     addClient: (_, data ) => {
//       let newClient = {
//         'name': data.name,
//         'lastname': data.lastname
//       };
//       clients.push(newClient)
//       return newClient;
//     }
//   }
// }
// // Provide your schema
// const server = createServer({
//   schema: {
//     typeDefs: typeDefinitions,

//     resolvers: resolvers,
//   },
// })

// // Start the server and explore http://localhost:4000/graphql
// server.start()




