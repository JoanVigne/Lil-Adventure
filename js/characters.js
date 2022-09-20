


    let player = document.createElement("div");
    player.setAttribute("id", "player");
    // player.setAttribute("");

    function characterDetails(who, hat, face, body, tool){
        // prendre le localStorage plus tard
        let theHat = document.createElement("div");
        theHat.setAttribute("id", hat);
        who.append(theHat);
        let theFace = document.createElement("div");
        theFace.setAttribute("id", face);
        who.append(theFace);
        let theBody = document.createElement("div");
        theBody.setAttribute("id", body);
        who.append(theBody);
        let theTool = document.createElement("div");
        theTool.setAttribute("id", tool);
        who.append(theTool);
    }



    function creationOfPeople(id, col, row){
        let thisPeople = document.createElement("div");
        thisPeople.setAttribute("id", id);
        thisPeople.setAttribute("class", "people");
        thisPeople.style.gridColumnStart = col;
        thisPeople.style.gridRowStart = row;
        container.append(thisPeople);
    }
    
    function deletAllPeople(){
        let people = document.querySelectorAll(".people");
        Array.from( people );
        people.forEach(person => {
            person.remove();
        });
    }



