		function startinglocation0() {
		   buttondisabled ();
		   resetbuttons ();
		   updateDisplay (locations[0].description);
		   updateLocation(locations[0].name);
		   Loc0score();
		   northbutton.disabled = true;
		   eastbutton.disabled = true;
		   westbutton.disabled = true;
		}
		function quicksandpath1() {
		   resetbuttons ();
		   updateDisplay (locations[1].description);
		   updateLocation(locations[1].name);
		   Loc1score();
		   northbutton.disabled = true;
		   westbutton.disabled = true;
		   
		   if ( !Rope.taken) {
		      updateDisplay (Rope.description);
			  inventory.push(Rope.name)
		      Rope.taken = true;	 
			}
		      
		   	   
		}
		function largersandpath2() {
		   resetbuttons ();
		   updateDisplay (locations[2].description);
		   updateLocation(locations[2].name);
		}
		function brokenbridgepath3() {
		   resetbuttons ();
	       updateDisplay (locations[3].description);
		   updateLocation(locations[3].name);
		   Loc3score();
		   northbutton.disabled = true;
		   eastbutton.disabled = true;
		   
		   if (Knife.taken === false) {
		      updateDisplay (Knife.description);
			  inventory.push(Knife.name)
		      Knife.taken = true;
		   }
		}
		function giantholepath4() {
		   resetbuttons ();
	       updateDisplay (locations[4].description);
		   updateLocation(locations[4].name);
		   Loc4score();
		   northbutton.disabled = true;
		   westbutton.disabled = true;
		   southbutton.disabled = true;
		   
		   if (Book.taken === false) {
		      updateDisplay (Book.description);
		      inventory.push(Book.name)
		      Book.taken = true;
		   }
		}
		function hut5() {
		   resetbuttons ();
	       updateDisplay (locations[5].description);
		   updateLocation(locations[5].name);
		   Loc5score();
		   northbutton.disabled = true;
		}
		function caveentrance6() {
		   resetbuttons ();
	       updateDisplay (locations[6].description);
		   updateLocation(locations[6].name);
		   Loc6score();
		}
		function cavepath7() {
		   resetbuttons ();
           updateDisplay (locations[7].description);
		   updateLocation(locations[7].name);
		   Loc7score();
		}
		function heartofthecave8() {
		   resetbuttons ();
           updateDisplay (locations[8].description);
		   updateLocation(locations[8].name);
		   Loc8score();
		   northbutton.disabled = true;
		   eastbutton.disabled = true;
		   southbutton.disabled = true;
		}
		function junglepath9() {
		   resetbuttons ();
           updateDisplay (locations[9].description);
		   updateLocation(locations[9].name);
		   Loc9score();
		   westbutton.disabled = true;
		   southbutton.disabled = true;
		   
		   if (Key.taken === false) {
		      updateDisplay (Key.description);
			  inventory.push(Key.name)
		      Key.taken = true;
		   }
		}
		function riverpath10() {
		   resetbuttons ();
           updateDisplay (locations[10].description);
		   updateLocation(locations[10].name);
		   Loc10score();
		}
