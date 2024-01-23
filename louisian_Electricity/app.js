const buttonClicked =()=>{
    // gets the input element by the ID
        const onPeak = document.getElementById("inputOne")
        const offPeak = document.getElementById("inputTwo")
    
    // the variables below access the value the user inputs
        const firstNumber = onPeak.value;
        const secondNumber = offPeak.value;
    
     // this converts the values from sting to integer   
        const valueOne = parseInt(firstNumber)
        const valueTwo =parseInt(secondNumber)
    
    //this access the values of the dropDown
    const selectElement = document.getElementById("provinces")
    const provinceDropDown = selectElement.value;
    
    
    
    //caluculates the on-peak and off-peak values
    const onPeakConsumption = Math.floor(firstNumber)* 0.132 ;
    console.log(onPeakConsumption)
    
    const offPeakConsumption = Math.floor(secondNumber)* 0.065 ;
    console.log(offPeakConsumption)
    
    const grossConsumption = Math.floor(onPeakConsumption + offPeakConsumption);
    console.log(grossConsumption)
    
    const hstValue = Math.floor(grossConsumption) * 0.13;
    console.log(hstValue)
    
    
    
    const { rebateValue, netConsumptionCharges } = (function () {
        if (provinceDropDown === "British") {
          const rebateValue = Math.floor (grossConsumption * 0.08);
          const netConsumptionCharges = Math.floor(grossConsumption + hstValue) - rebateValue;
          return { rebateValue, netConsumptionCharges };
    
        } else if (provinceDropDown === "Ontario") {
          const rebateValue = grossConsumption * 0.0;
          const netConsumptionCharges =Math.floor (grossConsumption + hstValue) - rebateValue;
          return { rebateValue, netConsumptionCharges };
        }
        return {};
      })();
      
      // Now you can access rebateValue and netConsumptionCharges outside of the if-else block
      console.log("Rebate Value:", rebateValue);
      console.log("Net Consumption Charges:", netConsumptionCharges);
      
    
    
      const onpeakHours =document.getElementById("onPeakHour")
      onpeakHours.style.backgroundColor = "#FF9BD2";
      onpeakHours.innerText = `ON PEAK USAGE 
       $${onPeakConsumption}`
    
      const offpeakHours =document.getElementById("offPeakHour")
      offpeakHours.style.backgroundColor="#D63484"
      offpeakHours.innerText = `OFF PEAK USAGE  
       $${offPeakConsumption}`
     
      const grossCharges =document.getElementById("grossCharge")
      grossCharges.innerText = `Gross consumption charges: $${grossConsumption}`
    
      const hst =document.getElementById("hstCharges")
      hst.innerText = `HST @13% :    $${hstValue} `
    
      const rebate =document.getElementById("rebateValue")
      rebate.innerText =  `Provincial Rebate @8% :    $${rebateValue}`
    
      const netConsumption =document.getElementById("netValue")
      netConsumption.style.backgroundColor="#A87C7C"
      netConsumption.innerText = ` Net Consumption Charges:    $${netConsumptionCharges}`
    
        console.log("button was clicked ")
    }
    
    
    document.getElementById("calculateButton").addEventListener("click", buttonClicked)