console.log("What is that was is now.")

// const car = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2015,
//     transmission: "manual"  
// }

// const animalNames = ["Kippers", "Jacks", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// const famZero = {
//     name: "Allison",
//     age: 40,
//     relation: "sister"
// }

// const famOne = { 
//     name: "Brayden",
//     age: 4,
//     relation: "nephew"
// }

// const famTwo = {
//     name: "Peggy",
//     age: 70,
//     relation: "mother"
// }

// const famThree = {
//     name: "Lee",
//     age: 70,
//     relation: "step-father"
// }

// const familyMembers= [famZero, famOne, famTwo, famThree]

// console.log(car)

// console.log(familyMembers)

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height)
// console.log(wardrobe.manufacturer)
// console.log(wardrobe.contents)
// console.log(wardrobe.contents[0])
// console.log(wardrobe.contents[1])
// console.log(wardrobe.contents[2])
// console.log(wardrobe.contents[3])
// console.log(wardrobe.contents[4])

// console.log(wardrobe.depth)
// console.log(wardrobe.width)

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// console.log(`Stories: ${empireStateBuilding.stories}, Height ${empireStateBuilding.height}, Sq Ft: ${empireStateBuilding.squareFeet}, EWL: ${empireStateBuilding.eastWestLength}, NSL: ${empireStateBuilding.northSouthLength}`)

// const addressKey = "address"
// const constructionKey = "constructionDate"
// const ownerKey = "owner"
// const costKey = "cost"
// const architectKey = "architect"

// console.log(`The ESB is located at ${empireStateBuilding[addressKey]}. It was built in ${empireStateBuilding[constructionKey]} 
// by ${empireStateBuilding[architectKey]}. It cost $${empireStateBuilding[costKey]} and is owned by ${empireStateBuilding.ownerKey}`)

// const nashvilleSoftwareSchool = {
//     founded: 2012,
//     director: "John Wark",
//     instructors: {
//         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//         partTime: ["Zoe", "Nathan"]
//     },
//     address: "500 Interstate Blvd. S"
// }

// for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++)
// console.log(`Full-time: ${nashvilleSoftwareSchool.instructors.fullTime[i]}`)

// for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++)
// console.log(`Part-time: ${nashvilleSoftwareSchool.instructors.partTime[i]}`)

// console.log(`${nashvilleSoftwareSchool.instructors.fullTime[4]}, ${nashvilleSoftwareSchool.instructors.partTime[0]} `)

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

const paul = beatles.members[1].name
const paulBorn = beatles.members[1].birth
const magicalMystery = beatles.albums[3]
const formed = beatles.history.formed
const disbanded = beatles.history.disbanded

console.log(`${paul} was in the Beatles from ${formed} to ${disbanded}. He was born in ${paulBorn}. He contributed heavily to the ${magicalMystery}.
`)