
        let index = 0;

        getVokabel();
        loadLolli();


        function getVokabel(){
            let lernenVokabelEng = localStorage.getItem('ListEng').split(",");
            index = Math.floor(Math.random()*lernenVokabelEng.length);
            document.getElementById('lernenVokabelEng').innerHTML = lernenVokabelEng[index];
        }
        function correct(){
            let lernenVokabelEng = localStorage.getItem('ListdeuEng').split(",");

            let vokabelInput = document.getElementById('lernenVokabelInput').value;
            let correctTranslation = lernenVokabelEng[index];

            if(vokabelInput ==  correctTranslation){
                document.getElementById('winner').style.display = "block";
                setTimeout(()=>{document.getElementById('winner').style.display = "none";},3000); 
                document.getElementById('lernenVokabelInput').value = "";
                getVokabel();
                addLolli();
            } else{
                document.getElementById('looser').style.display = "block";
                setTimeout(()=>{document.getElementById('looser').style.display = "none";},3000); 
                document.getElementById('lernenVokabelInput').value = "";
                getVokabel();
                removeLolli();
            }
        }