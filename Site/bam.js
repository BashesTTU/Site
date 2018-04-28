window.onload = function() {
	var data = [{
		values: [26164, 1943, 1763],
		labels: ['Resident', 'Non-Resident', 'Foreign'],
		type: 'pie'
	}];
	var layout = {
		height: 600,
		width: 900
	};
	Plotly.newPlot('graph-residents', data, layout);
	
	data = [{
		values: [16226, 13644],
		labels: ['Male', 'Female'],
		type: 'pie'
	}];
	Plotly.newPlot('graph-gender', data, layout);
	
	data = [{
		values: [487, 269, 504, 481, 814, 509, 347, 277, 5, 16, 114, 355, 383, 234, 508, 1505, 19, 331, 671, 475, 63, 4, 392, 193, 323, 949, 349, 424, 399, 30, 46, 953, 171, 489, 43, 300, 2, 1730, 94, 689, 2086, 476, 161, 171, 598, 194, 347, 6, 4173, 166, 440, 299, 190, 309, 84, 103, 2, 458, 1087, 365, 1443, 18, 4, 475, 20, 248],
		labels: ["Political Science", "English", "Sociology Anth and Social Work", "Journalism & Electronic Media", "Human Development and Family Studies", "Nutritional Sciences", "Personal Financial Planning", "Agric Education Comm", "Animal and Food Sciences", "Nutr Hospitality and Retailing", "Physics and Astronomy", "Natural Resources Management", "History", "Petroleum", "Provost Office", "Kinesiology and Sport Mgmt", "Visual and Performing Arts", "Arts & Sciences", "Public Relations", "Architecture", "Philosophy", "Information Systems and Quantitative Sciences", "Electrical and Computer Engineering", "Classical Modern Langs Lit", "Advertising", "Mechanical Engineering", "Human Sciences", "Agriculture Application Economics", "Hospitality & Retailing Management", "Civil, Environmental, and Construction Engineering", "Industrial, Manufacturing & Systems Engineering", "Psychological Sciences", "Civil Engineering", "Mathematics and Statistics", "Dean Human Sciences", "Civil, Environmental, and Construction Engineering ", "Texas Tech University", "Dean Engineering", "Landscape Architecture", "Animal and Food Science", "TTU Advising", "Music", "Community, Family, and Addiction Services", "Industrial Engineering", "Chemistry and Biochemistry", "Plant and Soil Science", "Communication Studies", "Other", "Business Administration", "Theatre and Dance", "Education", "Computer Science", "Design", "Geosciences", "Physics", "Psychology", "Applied and Prof Studies", "Economics", "Preprofessional Health Careers", "Chemical Engineering", "Biology", "Agricultural Education and Communications", "Agricultural and Applied Economics", "Teacher Education", "Honors College", "Art"],
		type: 'pie'
	}];
	Plotly.newPlot('graph-department', data, layout);
	
	data = [{
		y: [1141, 966, 817, 663, 565, 502, 470, 465, 445, 444, 385, 329, 289, 277, 251],
		x: ["Houston", "San Antonio", "Austin", "Dallas", "Fort Worth", "El Paso", "Amarillo", "Katy", "Midland", "Plano", "McKinney", "Frisco", "Arlington", "Spring", "Allen"],
		type: 'bar'
	}];
	
	Plotly.newPlot('graph-origin', data, layout);
	
	data = [{
		values: [1089, 510, 233, 124, 43, 13, 27],
		labels: ["Only 1 person", "Greater than 1 person, but less than or equal to 5", "Greater than 5, but less than or equal to 15", "Greater than 15, but less than or equal to 50", "Greater than 50, but less than or equal to 100", "Greater than 100, but less than or equal to 150", "Greater than 150"],
		type: 'pie'
	}];
	Plotly.newPlot('graph-city-count', data, layout);
	
	data = [{
		y: [6, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		x: ["San Antonio", "El Paso", "Plano", "Houston", "Spring", "Allen", "Cypress", "Austin", "Amarillo", "Flower Mound", "Round Rock", "The Woodlands", "Cedar Park", "Mansfield", "Kathmandu", "Midland", "Wylie", "Frisco", "Dallas", "Conroe", "Sugar Land", "Keller", "McKinney", "Canyon", "Katy", "Humble"],
		type: 'bar'
	}]
	Plotly.newPlot('graph-city-cs', data, layout);
};