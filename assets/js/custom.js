// Function to calculations
function calculateweight() 
{
    var usUnitsActive = document.getElementById('usUnitTab').classList.contains('active');
    var heightMeters, weightKilograms ,bmiheight, bmiheightcm;
    if (usUnitsActive) {
        var heightFeet    = parseFloat(document.getElementById('heightFeet').value);
        var heightInches  = parseFloat(document.getElementById('heightInches').value);  
        var bmiheightcm   = (heightFeet * 0.3048) + (heightInches * 0.0254);
    } else {
        heightMeters      = parseFloat(document.getElementById('height').value);
        bmiheight         = parseFloat(document.getElementById('height').value)/100;
        bmiheightcm       = bmiheight.toFixed(1);
    }
    var age = parseFloat(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var weightKg;
    let bmi;     
    if (gender === 'male') {
        const maleWeightLbs           = calculateWeightInLbs(true, heightFeet, heightInches); 
        const maleWeightKg            = calculateWeightInKg(true, heightMeters);          
        const MillercalmaleWeightLbs  = MillercalculateWeightInLbs(true, heightFeet, heightInches); 
        const MillermaleWeightKg      = MillercalculateWeightInKg(true, heightMeters); 
        const  DevincalmaleWeightLbs  = DevinecalculateWeight(true, heightFeet, heightInches); 
        const  DevincalmaleWeightkg   = DevinecalculateWeightkg(true, heightMeters); 
        const HamwicalmaleWeightLbs   = HamwicalculateWeight(true, heightFeet, heightInches); 
        const HamwicalmaleWeightkg    = HamwicalculateWeightkg(true, heightMeters); 
        const bmiweight               = parseFloat(maleWeightKg).toFixed(0);
        bmi                           = (bmiweight / Math.pow(bmiheightcm, 2)).toFixed(2);
        let lowerHealthyBMI, upperHealthyBMI;
        if (usUnitsActive) {
            document.getElementById('RobinsonOutput').textContent = maleWeightLbs.toFixed(1) +' lbs';               
            document.getElementById('MillerOutput').textContent = MillercalmaleWeightLbs.toFixed(1) +' lbs';
            document.getElementById('DevineOutput').textContent = DevincalmaleWeightLbs.toFixed(1) +' lbs';
            document.getElementById('HamwiOutput').textContent = HamwicalmaleWeightLbs.toFixed(1) +' lbs';   
            const heightInInches = heightFeet * 12 + heightInches;
            lowerHealthyBMI = 18.5 * (heightInInches * heightInInches / 703);
            upperHealthyBMI = 24.9 * (heightInInches * heightInInches / 703);
            document.getElementById('BMIRangeOutput').textContent = lowerHealthyBMI.toFixed(1) + ' - ' + upperHealthyBMI.toFixed(1) + ' lbs';
        } 
        else{
            document.getElementById('RobinsonOutput').textContent = maleWeightKg.toFixed(1) +' kg';
            document.getElementById('MillerOutput').textContent = MillermaleWeightKg.toFixed(1) +' kg';
            document.getElementById('DevineOutput').textContent = DevincalmaleWeightkg.toFixed(1) +' kg';
            document.getElementById('HamwiOutput').textContent = HamwicalmaleWeightkg.toFixed(1) +' kg';
            lowerHealthyBMI = 18.5 * (bmiheightcm * bmiheightcm);
            upperHealthyBMI = 24.9 * (bmiheightcm * bmiheightcm);
            document.getElementById('BMIRangeOutput').textContent = lowerHealthyBMI.toFixed(1) + ' - ' + upperHealthyBMI.toFixed(1) + ' kg';
        }         
    }
    if (gender === 'female'){
        const femaleWeightLbs         = calculateWeightInLbs(false, heightFeet, heightInches);
        const femaleWeightKg          = calculateWeightInKg(false, heightMeters);          
        const MillerfemaleWeightlbs   = MillercalculateWeightInLbs(false, heightFeet, heightInches);
        const MillerfemaleWeightKg    = MillercalculateWeightInKg(false, heightMeters);       
        const DevincalfemaleWeightLbs = DevinecalculateWeight(false, heightFeet, heightInches); 
        const DevincalfemaleWeightkg  = DevinecalculateWeightkg(true, heightMeters); 
        const HamwicalfemaleWeightLbs = HamwicalculateWeight(false, heightFeet, heightInches); 
        const HamwicalfemaleWeightkg  = HamwicalculateWeightkg(false, heightMeters); 
        const bmiweight               = parseFloat(femaleWeightKg).toFixed(0);
        let lowerHealthyBMI, upperHealthyBMI;
        if (usUnitsActive) {   
            document.getElementById('RobinsonOutput').textContent = femaleWeightLbs.toFixed(1) +' lbs';                  
            document.getElementById('MillerOutput').textContent = MillerfemaleWeightlbs.toFixed(1) +' lbs';                 
            document.getElementById('HamwiOutput').textContent = HamwicalfemaleWeightLbs.toFixed(1) +' lbs'; 
            document.getElementById('DevineOutput').textContent = DevincalfemaleWeightLbs.toFixed(1) +' lbs';  
            const heightInInches = heightFeet * 12 + heightInches;    
            lowerHealthyBMI = 18.5 * (heightInInches * heightInInches / 703);
            upperHealthyBMI = 24.9 * (heightInInches * heightInInches / 703);
            document.getElementById('BMIRangeOutput').textContent = lowerHealthyBMI.toFixed(1) + ' - ' + upperHealthyBMI.toFixed(1) + ' lbs';
        } 
        else
        {
            document.getElementById('RobinsonOutput').textContent = femaleWeightKg.toFixed(1) +' kg';
            document.getElementById('MillerOutput').textContent = MillerfemaleWeightKg.toFixed(1) +' kg';
            document.getElementById('DevineOutput').textContent = DevincalfemaleWeightkg.toFixed(1) +' kg';
            document.getElementById('HamwiOutput').textContent = HamwicalfemaleWeightkg.toFixed(1) +' kg';
            lowerHealthyBMI = 18.5 * (bmiheightcm * bmiheightcm);
            upperHealthyBMI = 24.9 * (bmiheightcm * bmiheightcm);
            document.getElementById('BMIRangeOutput').textContent = lowerHealthyBMI.toFixed(1) + ' - ' + upperHealthyBMI.toFixed(1) + ' kg';
        }
    }

    function calculateWeightInLbs(isMale, heightFeet, heightInches) {
        const baseWeightKg = isMale ? 52 : 49;
        const heightInInches = heightFeet * 12 + heightInches;
        if (heightInInches <= 60) {
            const baseWeightLbs = baseWeightKg * 2.20462;
            return baseWeightLbs;
        } else {
            const additionalWeightKg = isMale ? 1.9 : 1.7;
            const heightOverFiveFeet = heightInInches - 60;
            const additionalWeightLbs = additionalWeightKg * 2.20462;
            return (baseWeightKg + additionalWeightKg * heightOverFiveFeet) * 2.20462;
        }
    }

    function calculateWeightInKg(isMale, heightCm) {
        const baseWeightKg = isMale ? 52 : 49;
        if (heightCm <= 152.4) {
            return baseWeightKg;
        } else {
            const additionalWeightKg = isMale ? 1.9 : 1.7;
            const heightOverFiveFeetCm = heightCm - 152.4;
            return baseWeightKg + additionalWeightKg * (heightOverFiveFeetCm / 2.54);
        }
    }

    function MillercalculateWeightInKg(isMale, heightCm) {
        const maleBaseWeight       = 56.2;
        const femaleBaseWeight     = 53.1;
        const heightInInches       = heightCm / 2.54;
        const heightOverFiveFeet   = heightInInches - 60;
        let weight;
        if (isMale) {
            weight = maleBaseWeight + 1.41 * heightOverFiveFeet;
        } else {
            weight = femaleBaseWeight + 1.36 * heightOverFiveFeet;
        }
        return weight;
    }

    function MillercalculateWeightInLbs(isMale, feet, inches) {
        const maleBaseWeight     = 56.2;
        const femaleBaseWeight   = 53.1;
        const heightInInches     = (feet * 12) + inches;
        const heightOverFiveFeet = heightInInches - 60;
        let weight;
        if (isMale) {
            weight = maleBaseWeight + 1.41 * heightOverFiveFeet;
        } else {
            weight = femaleBaseWeight + 1.36 * heightOverFiveFeet;
        }
        const weightInLbs = weight * 2.20462;
        return weightInLbs;
    }

    function HamwicalculateWeight(isMale, feet, inches) {
        const maleBaseWeight = 48.0;
        const femaleBaseWeight = 45.5;
        const heightInInches = feet * 12 + inches; 
        const heightOverFiveFeet = heightInInches - 60; 
        let weight;
        if (isMale) {
            weight = maleBaseWeight + 2.7 * heightOverFiveFeet;
        } else {
            weight = femaleBaseWeight + 2.2 * heightOverFiveFeet;
        }
        const weightInLbs = weight * 2.20462;
        return weightInLbs;
    }

    function HamwicalculateWeightkg(isMale, heightInCm) {
        const maleBaseWeight = 48.0;
        const femaleBaseWeight = 45.5;
        const heightInInches = heightInCm / 2.54;
        const heightOverFiveFeet = heightInInches - 60;
        let weight;
        if (isMale) {
            weight = maleBaseWeight + 2.7 * heightOverFiveFeet;
        } else {
            weight = femaleBaseWeight + 2.2 * heightOverFiveFeet;
        }
        const weightInKg = weight;
        return weightInKg; 
    }

    function DevinecalculateWeight(isMale, feet, inches) {
        const maleBaseWeight = 50.0;
        const femaleBaseWeight = 45.5; 
        const heightInInches = feet * 12 + inches; 
        const heightOverFiveFeet = heightInInches - 60;
        let weight;
        if (isMale) {
            weight = maleBaseWeight + 2.3 * heightOverFiveFeet;
        } else {
            weight = femaleBaseWeight + 2.3 * heightOverFiveFeet; 
        }
        const weightInLbs = weight * 2.20462;
        return weightInLbs;
    }

    function DevinecalculateWeightkg(isMale, heightInCm) {
        const maleBaseWeight = 50.0;
        const femaleBaseWeight = 45.5;

        let weight;
        if (isMale) {
            weight = maleBaseWeight + 2.3 * ((heightInCm - 152.4) / 2.54);
        } else {
            weight = femaleBaseWeight + 2.3 * ((heightInCm - 152.4) / 2.54);
        }
        const weightInLbs = weight;
        return weightInLbs; 
    }
}

// Click Us Units
document.getElementById('usUnitTab').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('usUnitTab').classList.add('active');
    document.getElementById('metricUnitTab').classList.remove('active');
    document.getElementById('usUnits').style.display = 'block';
    document.getElementById('metricUnits').style.display = 'none';
});

// Click Metric Units
document.getElementById('metricUnitTab').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('metricUnitTab').classList.add('active');
    document.getElementById('usUnitTab').classList.remove('active');
    document.getElementById('usUnits').style.display = 'none';
    document.getElementById('metricUnits').style.display = 'block';
});

// Form Submit
document.getElementById('IdealWeightForm').addEventListener('submit', function (e) {
    e.preventDefault();
    calculateweight();
});

// Clear Inputs 
document.getElementById('clear').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('gender').selectedIndex = 0;
    document.getElementById('age').value = '';
    document.getElementById('ageValidation').textContent = '';
    if (document.getElementById('usUnitTab').classList.contains('active')) {
        document.getElementById('heightFeet').value = '0';
        document.getElementById('heightInches').value = '0';
    } else {
        document.getElementById('height').value = '0';
    }
});

// Age Validation 
document.getElementById('age').addEventListener('input', function() {
    var age = this.value;
    var ageValidationElement = document.getElementById('ageValidation');
    if (age < 1 || age > 120) {
        ageValidationElement.textContent = 'Age must be between 1 and 120 years.';
    } else {
        ageValidationElement.textContent = '';
    }
});