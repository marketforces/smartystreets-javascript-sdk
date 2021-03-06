const chai = require("chai");
const expect = chai.expect;
const Candidate = require("../../src/international_street/Candidate");

describe("An International match candidate", function () {
	it("populates with the appropriate fields.", function () {
		const mockResponseData = {
				organization: "1",
				address1: "2",
				address2: "3",
				address3: "4",
				address4: "5",
				address5: "6",
				address6: "7",
				address7: "8",
				address8: "9",
				address9: "10",
				address10: "11",
				address11: "12",
				address12: "13",
				components: {
					country_iso_3: "14",
					super_administrative_area: "15",
					administrative_area: "16",
					sub_administrative_area: "17",
					dependent_locality: "18",
					dependent_locality_name: "19",
					double_dependent_locality: "20",
					locality: "21",
					postal_code: "22",
					postal_code_short: "23",
					postal_code_extra: "24",
					premise: "25",
					premise_extra: "26",
					premise_prefix_number: "26.5",
					premise_number: "27",
					premise_type: "28",
					thoroughfare: "29",
					thoroughfare_predirection: "30",
					thoroughfare_postdirection: "31",
					thoroughfare_name: "32",
					thoroughfare_trailing_type: "33",
					thoroughfare_type: "34",
					dependent_thoroughfare: "35",
					dependent_thoroughfare_predirection: "36",
					dependent_thoroughfare_postdirection: "37",
					dependent_thoroughfare_name: "38",
					dependent_thoroughfare_trailing_type: "39",
					dependent_thoroughfare_type: "40",
					building: "41",
					building_leading_type: "42",
					building_name: "43",
					building_trailing_type: "44",
					sub_building_type: "45",
					sub_building_number: "46",
					sub_building_name: "47",
					sub_building: "48",
					post_box: "49",
					post_box_type: "50",
					post_box_number: "51",
				},
				metadata: {
					latitude: 52.0,
					longitude: 53.0,
					geocode_precision: "54",
					max_geocode_precision: "55",
					address_format: "56",
				},
				analysis: {
					verification_status: "57",
					address_precision: "58",
					max_address_precision: "59",
				},
			};
		const expectedCandidateFields = {
			organization: "1",
			address1: "2",
			address2: "3",
			address3: "4",
			address4: "5",
			address5: "6",
			address6: "7",
			address7: "8",
			address8: "9",
			address9: "10",
			address10: "11",
			address11: "12",
			address12: "13",
			components: {
				countryIso3: "14",
				superAdministrativeArea: "15",
				administrativeArea: "16",
				subAdministrativeArea: "17",
				dependentLocality: "18",
				dependentLocalityName: "19",
				doubleDependentLocality: "20",
				locality: "21",
				postalCode: "22",
				postalCodeShort: "23",
				postalCodeExtra: "24",
				premise: "25",
				premiseExtra: "26",
				premisePrefixNumber: "26.5",
				premiseNumber: "27",
				premiseType: "28",
				thoroughfare: "29",
				thoroughfarePredirection: "30",
				thoroughfarePostdirection: "31",
				thoroughfareName: "32",
				thoroughfareTrailingType: "33",
				thoroughfareType: "34",
				dependentThoroughfare: "35",
				dependentThoroughfarePredirection: "36",
				dependentThoroughfarePostdirection: "37",
				dependentThoroughfareName: "38",
				dependentThoroughfareTrailingType: "39",
				dependentThoroughfareType: "40",
				building: "41",
				buildingLeadingType: "42",
				buildingName: "43",
				buildingTrailingType: "44",
				subBuildingType: "45",
				subBuildingNumber: "46",
				subBuildingName: "47",
				subBuilding: "48",
				postBox: "49",
				postBoxType: "50",
				postBoxNumber: "51",
			},
			metadata: {
				latitude: 52.0,
				longitude: 53.0,
				geocodePrecision: "54",
				maxGeocodePrecision: "55",
				addressFormat: "56",
			},
			analysis: {
				verificationStatus: "57",
				addressPrecision: "58",
				maxAddressPrecision: "59",
			},
		};
		let candidate = new Candidate(mockResponseData);

		expect(candidate).to.deep.equal(expectedCandidateFields);
	});
});
