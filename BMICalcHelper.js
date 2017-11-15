function calcImperialBMIFeetAndInches(heightInFeet, heightInInches, weightInPounds)
{
	var heightInInches = (heightInFeet *12 ) + heightInInches;
	
	return calcImperialBMI(heightInInches, weightInPounds);
}
	
function calcImperialBMI(heightInInches, weightInPounds)
{
	var BMI;
	
	BMI = (weightInPounds * 703)/(heightInInches*heightInInches);
	
	return BMI;
}

function calcMetricBMICMandMM(heightInCentimeters, heightInMillimeters, weightInKilos)
{
		
	var combinedHeight = (heightInCentimeters)+ (heightInMillimeters/10);
	
	return calcMetricBMI(combinedHeight, weightInKilos);
	
}

function calcMetricBMI(heightInCentimeters, weightInKilos)
{
	var BMI;
	
	var heightInMeters = heightInCentimeters/100;
	
	BMI = (weightInKilos)/(heightInMeters*heightInMeters);
	
	return BMI;
}