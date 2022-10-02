
			jQuery(function($){

				var draw = function(shape){
					var a = 5;
					var b = a*shape[0];
					var c = a*shape[1];
					var d = a*shape[2];
					var e = a*shape[3];
					var f = a*shape[4];
					var g = a*shape[5];
					console.log(a + "," + b + "," + c + "," + d + "," + e + "," + f)
					return [
						'M', 11.0, 40.0, 

						'c', b, -c, ',', d, -e, ',', f, 0,

						
						
					].join(' ');
				
			
				};
				if(e < 250){
				diamond = [ 7.5,        4.0,                    7.5,       0,            5.0, -30 ];
				circle  = [ 7.5,        4.0,                    7.5,       100.0,            15.0, 45 ];

			}
				//triangle  = [ 7.5,        4.0,                    7.5,       -400.0,            30.0, 90 ];
				
          
				$('#diamond').attr({ d: draw(diamond) });
				$('#circle' ).attr({ d: draw(circle) });

				
				
				setInterval(function(){
					
					var p = Math.abs( (Date.now() % 6000) - 3000 ) / 3000;
					//$('#animation2').attr({ d: draw(circle.map(function(v,i){ return p*v + (1-p)*triangle[i]; })) });
					$('#animation2b').attr({ d: draw(diamond.map(function(v,i){ return p*v + (1-p)*circle[i]; })) });
					
				}, 15);
			

			});
