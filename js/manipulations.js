import {
	profileData,
	educationsData,
	experiencesData,
	skillsData,
	contactsData,
} from "./data.js"

let content = document.querySelector("#body-content")

function manipulateProfile(data) {
	let profileTableColName = content.querySelector("#profile-table")
	for (let colData of data) {
		profileTableColName.innerHTML += `
        <tr>
        <td>
            <span class="white blue-text darken-4-text"
                >${colData.colName}</span
            >
        </td>
        <td>${colData.val}</td>
    </tr>
        `
	}

	let profileTableRow = content.querySelectorAll(".profile-personal tr ")
	for (let profileRows of profileTableRow) {
		profileRows.classList.add("z-depth-2")
	}
}

function manipulateEducations(data) {
	let educationsFormalTableColName = content.querySelector(
		"#educations-table-formal"
	)
	let educationsBootcampTableColName = content.querySelector(
		"#educations-table-bootcamp"
	)
	for (let colData of data[0].formals) {
		educationsFormalTableColName.innerHTML += `
         <tr>
		    <td>
				<span class="white blue-text darken-4-text">
					${colData.colName}
					</span>
				</td>
			<td>${colData.val}</td>
		</tr>
        `
	}

	for (let colData of data[1].bootcamps) {
		educationsBootcampTableColName.innerHTML += `
    <tr>
		<td>
			<span class="white blue-text darken-4-text">
					${colData.colName}
					</span>
				</td>
			<td>${colData.val}</td>
		</tr>
        `
	}
}

function manipulateExperiences(data) {
	let experiencesOrgTableColName = content.querySelector(
		"#experiences-table-organizational"
	)
	let experiencesProjectTableColName = content.querySelector(
		"#experiences-table-project"
	)
	for (let colData of data[0].organizationalExperiences) {
		experiencesOrgTableColName.innerHTML += `
        <tr>
			<td>
			    <span class="white blue-text darken-4-text">
				${colData.colName}    
				</span>
					</td>
				<td>
                ${colData.val}
                </td>
    	</tr>
        `
	}
	for (let colData of data[0].projectExperiences) {
		experiencesProjectTableColName.innerHTML += `
        <tr>
        <td>
            <span class="white time blue-text darken-4-text">
                ${colData.colName}
            </span>
        </td>
        <td>
            <span class="project-name">${colData.val[0].projectName}</span> </br>
            <span class="stack">${colData.val[0].stack}</span>
        </td>
    </tr>
        `
	}
}

function manipulateSkills(data) {
	let profileTableColName = content.querySelector("#skills-table")
	for (let colData of data) {
		profileTableColName.innerHTML += `
		<tr>
		<td>
			<span class="white blue-text darken-4-text"
				>${colData.colName}</span
			>
		</td>
		<td>
			<span
				class="progress center-align white"
				style="height: 20px;"
			>
				<span
					class="determinate white-text blue-grey darken-4"
					style="width: ${colData.val};"
					>${colData.val}</span
				>
			</span>
		</td>
	</tr>
        `
	}
}

function manipulateContacts(data) {
	let contactsTableColName = content.querySelector("#contacts-table")
	for (let colData of data) {
		contactsTableColName.innerHTML += `
		<tr>
		<td>
			<span class="white blue-text darken-4-text">${colData.colName}</span>
		</td>
		<td > <img src="../img/${colData.icon}.svg" alt="${colData.colName}" srcset=""> ${colData.val}</td>
	</tr>`
	}
}

const cekRoutes = function (page) {
	if (page == "profile") {
		manipulateProfile(profileData)
	}
	if (page == "educations") {
		manipulateEducations(educationsData)
	}
	if (page == "experiences") {
		manipulateExperiences(experiencesData)
	}
	if (page == "skills") {
		manipulateSkills(skillsData)
	}
	if (page == "contacts") {
		manipulateContacts(contactsData)
	}
}

export default cekRoutes
