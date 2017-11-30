

/* Function to grab "Typology_C" data from json_linedata. Once user
  clicks on the data line, save the "Typology_C" data from dataset
  into variable "type". Execute part of the switch statement depending
  on "type" value.Use JQuery to add applicability values and format
  using css. */
function getType(feature, layer) {

    /* When click on layer, do the following*/
    layer.on('click', function (e) {

        /* Save typology_C data into variable type*/
        var type = e.target.feature.properties.TYPOLOGY_C;
        /*hide overlay and table data overlay*/
        $(".overlay").hide();
        $("#tableOverlay").css('visibility', 'hidden');
        $("#tableOverlay").scrollTop(0);

        /* Reset each applicability type to white on every click,
          before switch statement is executed*/
        $("#app1").css("color" , "white");
        $("#app2").css("color" , "white");
        $("#app3").css("color" , "white");
        $("#app4").css("color" , "white");
        $("#app5").css("color" , "white");
        $("#app6").css("color" , "white");
        $("#app7").css("color" , "white");
        $("#app8").css("color" , "white");
        $("#app9").css("color" , "white");
        $("#app10").css("color" , "white");
        $("#app11").css("color" , "white");
        $("#app12").css("color" , "white");
        $("#app13").css("color" , "white");
        $("#app14").css("color" , "white");
        $("#app15").css("color" , "white");
        $("#app16").css("color" , "white");
        $("#app17").css("color" , "white");
        $("#app18").css("color" , "white");
        $("#app19").css("color" , "white");
        $("#app20").css("color" , "white");
        $("#app21").css("color" , "white");

        $("#case"+type).css('visibility', 'visible');
        $("#case"+type).show({
        complete: function(ev){
        $("#tableOverlay").css('visibility', 'visible');
        }
        });

        /* Switch statement that checks each of the different
           case types. */
        switch(type){

            /* If type matches case 101, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 101:
            $("#edgeText").text("Natural");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("Medium");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("Low");
            $("#app4").text("High").css("color", "#64E36F");
            $("#app5").text("High").css("color", "#64E36F");
            $("#app6").text("High").css("color", "#64E36F");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("High").css("color", "#64E36F");
            $("#app9").text("Medium");
            $("#app10").text("Low");
            $("#app11").text("Low");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("High").css("color", "#64E36F");
            $("#app16").text("High").css("color", "#64E36F");
            $("#app17").text("High").css("color", "#64E36F");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("High").css("color", "#64E36F");
            $("#case101").show({}, function(ev){
            $("#tableOverlay").show();
            });
            break;


            /* If type matches case 102, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 102:
            console.log( "Typology is 102");
            $("#edgeText").text("Natural");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Medium Slopes");
            $("#app1").text("Medium");
            $("#app2").text("Medium");
            $("#app3").text("Low");
            $("#app4").text("Medium");
            $("#app5").text("Medium");
            $("#app6").text("Medium");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Medium");
            $("#app10").text("Low");
            $("#app11").text("High").css("color", "#64E36F");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Medium");
            $("#app16").text("Medium");
            $("#app17").text("Medium");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Medium");
            $("#case102").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 103, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 103:
            console.log( "Typology is 103");
            $("#edgeText").text("Natural");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Steep Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Medium");
            $("#app10").text("High").css("color", "#64E36F");
            $("#app11").text("Medium");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Low");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Low");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Low");
            $("#case103").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 111, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 111:
            console.log( "Typology is 111");
            $("#edgeText").text("Natural");
            $("#waveText").text("Exposed");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("High").css("color", "#64E36F");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("High").css("color", "#64E36F");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("High").css("color", "#64E36F");
            $("#app7").text("Medium");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Low");
            $("#app11").text("Low");
            $("#app12").text("Low");
            $("#app13").text("High").css("color", "#64E36F");
            $("#app14").text("High").css("color", "#64E36F");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("High").css("color", "#64E36F");
            $("#app18").text("Low");
            $("#app19").text("Medium");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("High").css("color", "#64E36F");
            $("#case111").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px*/});
            break;

            /* If type matches case 112, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 112:
            console.log( "Typology is 112");
            $("#edgeText").text("Natural");
            $("#waveText").text("Exposed");
            $("#topoText").text("Medium Slopes");
            $("#app1").text("High").css("color", "#64E36F");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Medium");
            $("#app6").text("Low");
            $("#app7").text("Medium");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Low");
            $("#app11").text("Medium");
            $("#app12").text("Low");
            $("#app13").text("High").css("color", "#64E36F");
            $("#app14").text("Medium");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Medium");
            $("#app18").text("Low");
            $("#app19").text("Medium");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Medium");
            $("#case112").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 113, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 113:
            console.log( "Typology is 113");
            $("#edgeText").text("Natural");
            $("#waveText").text("Exposed");
            $("#topoText").text("Steep Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Medium");
            $("#app11").text("Medium");
            $("#app12").text("Low");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Low");
            $("#app18").text("Medium");
            $("#app19").text("Medium");
            $("#app20").text("Medium");
            $("#app21").text("Low");
            $("#case113").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 201, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 201:
            console.log( "Typology is 201");
            $("#edgeText").text("Man-Made Soft");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("Medium");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("Low");
            $("#app4").text("High").css("color", "#64E36F");
            $("#app5").text("High").css("color", "#64E36F");
            $("#app6").text("High").css("color", "#64E36F");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("High").css("color", "#64E36F");
            $("#app9").text("Medium");
            $("#app10").text("Low");
            $("#app11").text("Low");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("High").css("color", "#64E36F");
            $("#app16").text("High").css("color", "#64E36F");
            $("#app17").text("High").css("color", "#64E36F");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("High").css("color", "#64E36F");
            $("#case201").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 202, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 202:
            console.log( "Typology is 202");
            $("#edgeText").text("Man-Made Soft");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Medium Slopes");
            $("#app1").text("Medium");
            $("#app2").text("Medium");
            $("#app3").text("Low");
            $("#app4").text("Medium");
            $("#app5").text("Medium");
            $("#app6").text("Medium");
            $("#app7").text("High");
            $("#app8").text("Low");
            $("#app9").text("Medium");
            $("#app10").text("Low");
            $("#app11").text("High").css("color", "#64E36F");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Medium");
            $("#app16").text("Medium");
            $("#app17").text("Medium");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Medium");
            $("#case202").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 203, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 203:
            console.log( "Typology is 203");
            $("#edgeText").text("Man-Made Soft");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Steep Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Medium");
            $("#app10").text("High").css("color", "#64E36F");
            $("#app11").text("Medium");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Low");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Low");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Low");
            $("#case203").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 211, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 211:
            console.log( "Typology is 211");
            $("#edgeText").text("Man-Made Soft");
            $("#waveText").text("Exposed");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("High").css("color", "#64E36F");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("High").css("color", "#64E36F");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("High").css("color", "#64E36F");
            $("#app7").text("Medium");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Low");
            $("#app11").text("Low");
            $("#app12").text("Low");
            $("#app13").text("High").css("color", "#64E36F");
            $("#app14").text("High").css("color", "#64E36F");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("High").css("color", "#64E36F");
            $("#app18").text("Low");
            $("#app19").text("Medium");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("High").css("color", "#64E36F");
            $("#case211").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 212, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 212:
            console.log( "Typology is 212");
            $("#edgeText").text("Man-Made Soft");
            $("#waveText").text("Exposed");
            $("#topoText").text("Medium Slopes");
            $("#app1").text("High").css("color", "#64E36F");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Medium");
            $("#app6").text("Low");
            $("#app7").text("Medium");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Low");
            $("#app11").text("Medium");
            $("#app12").text("Low");
            $("#app13").text("High").css("color", "#64E36F");
            $("#app14").text("Medium");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Medium");
            $("#app18").text("Low");
            $("#app19").text("Medium");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Medium");
            $("#case212").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 213, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 213:
            console.log( "Typology is 213");
            $("#edgeText").text("Man-Made Soft");
            $("#waveText").text("Exposed");
            $("#topoText").text("Steep Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Medium");
            $("#app11").text("Medium");
            $("#app12").text("Low");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Low");
            $("#app18").text("Medium");
            $("#app19").text("Medium");
            $("#app20").text("Medium");
            $("#app21").text("Low");
            $("#case213").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 301, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 301:
            console.log( "Typology is 301");
             $("#edgeText").text("Man-Made Hardened");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("Medium");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("Low");
            $("#app4").text("High").css("color", "#64E36F");
            $("#app5").text("High").css("color", "#64E36F");
            $("#app6").text("High").css("color", "#64E36F");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("High").css("color", "#64E36F");
            $("#app9").text("Medium");
            $("#app10").text("High").css("color", "#64E36F");
            $("#app11").text("High").css("color", "#64E36F");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("High").css("color", "#64E36F");
            $("#app14").text("Low");
            $("#app15").text("High").css("color", "#64E36F");
            $("#app16").text("High").css("color", "#64E36F");
            $("#app17").text("High").css("color", "#64E36F");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("High").css("color", "#64E36F");
            $("#case301").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 302, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 302:
            console.log( "Typology is 302");
            $("#edgeText").text("Man-Made Hardened");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Medium Slopes");
            $("#app1").text("Medium");
            $("#app2").text("Medium");
            $("#app3").text("Low");
            $("#app4").text("Medium");
            $("#app5").text("Medium");
            $("#app6").text("Medium");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Medium");
            $("#app10").text("High").css("color", "#64E36F");
            $("#app11").text("High").css("color", "#64E36F");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Medium");
            $("#app16").text("Medium");
            $("#app17").text("Medium");
            $("#app18").text("Low");
            $("#app19").text("Low");
            $("#app20").text("Low");
            $("#app21").text("Medium");
            $("#case302").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 303, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 303:
            console.log( "Typology is 303");
            $("#edgeText").text("Man-Made Hardened");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Steep Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("High").css("color", "#64E36F");
            $("#app8").text("Low");
            $("#app9").text("Medium");
            $("#app10").text("High").css("color", "#64E36F");
            $("#app11").text("High").css("color", "#64E36F");
            $("#app12").text("High").css("color", "#64E36F");
            $("#app13").text("Low");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Low");
            $("#app18").text("Low");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Low");
            $("#case303").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 311, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 311:
            console.log( "Typology is 311");
            $("#edgeText").text("Man-Made Hardened");
            $("#waveText").text("Exposed");
            $("#topoText").text("Gentle Slopes");
            $("#edgeText").text("Natural");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("High").css("color", "#64E36F");
            $("#app2").text("High").css("color", "#64E36F");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("High").css("color", "#64E36F");
            $("#app7").text("Medium");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Medium");
            $("#app11").text("High").css("color", "#64E36F");
            $("#app12").text("Low");
            $("#app13").text("High").css("color", "#64E36F");
            $("#app14").text("Medium");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("High").css("color", "#64E36F");
            $("#app18").text("Low");
            $("#app19").text("Medium");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("High").css("color", "#64E36F");
            $("#case311").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            break;

            /* If type matches case 312, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 312:
            console.log( "Typology is 312");
           $("#edgeText").text("Man-Made Hardened");
            $("#waveText").text("Exposed");
            $("#topoText").text("Medium Slopes");
            $("#edgeText").text("Natural");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("Medium");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Medium");
            $("#app11").text("Medium");
            $("#app12").text("Low");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Medium");
            $("#app18").text("High").css("color", "#64E36F");
            $("#app19").text("High").css("color", "#64E36F");
            $("#app20").text("High").css("color", "#64E36F");
            $("#app21").text("Medium");
            $("#case312").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            $("#case312").show();
            $("#tableOverlay").show();
            break;

            /* If type matches case 313, add the following titles,
            text for applicability rows, and change text to
            green color for "high" value */
            case 313:
            console.log( "Typology is 313");
            $("#edgeText").text("Man-Made Hardened");
            $("#waveText").text("Exposed");
            $("#topoText").text("Steep Slopes");
            $("#edgeText").text("Natural");
            $("#waveText").text("Sheltered");
            $("#topoText").text("Gentle Slopes");
            $("#app1").text("Low");
            $("#app2").text("Low");
            $("#app3").text("Low");
            $("#app4").text("Low");
            $("#app5").text("Low");
            $("#app6").text("Low");
            $("#app7").text("Low");
            $("#app8").text("Low");
            $("#app9").text("Low");
            $("#app10").text("Medium");
            $("#app11").text("Low");
            $("#app12").text("Low");
            $("#app13").text("Medium");
            $("#app14").text("Low");
            $("#app15").text("Low");
            $("#app16").text("Low");
            $("#app17").text("Low");
            $("#app18").text("Medium");
            $("#app19").text("Medium");
            $("#app20").text("Low");
            $("#app21").text("Low");
            $("#case301").show({
            /*left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'*/});
            $("#tableOverlay").show();
            break;

            default:
            console.log ("Please click on shore segment");
        }

    });
}

    /*Function to style line of the data set*/
        function style_linedata_0_0() {
            return {
                pane: 'pane_linedata_0',
                opacity: 1,
                color: 'rgba(0,243,255,1.0)',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                }
                }
