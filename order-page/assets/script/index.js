var j;
var i;
var temp=0 ,k=0;
function addMore(){};
var da="",t="";
$.ajax({
        url: "order-page/order.json",//on local host "https://
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            //alert(res);
		document.querySelector("#respaper").textContent=res.writer.paper;
		document.querySelector("#address").textContent=res.writer.street + ", " + res.writer.city + ", " + res.writer.state + ", " + res.writer.zipcode;
		document.querySelector("#upaper").textContent=res.user.paper;
		document.querySelector("#ipaper").textContent=res.user.id;
		j=0;

		for(i=0; (i<3 && i<res.items.length);i++)
		{	j++;   
			if(i==0){
				document.querySelector("#ia").textContent=res.items[i].paper;
				document.querySelector("#ca").textContent=res.items[i].category;
				document.querySelector("#pa").textContent=res.items[i].price;
				document.querySelector("#cua").textContent=res.items[i].currency;
				document.querySelector("#ta").textContent=res.items[i].tax;

			}
			else if(i==1){
				document.querySelector("#ib").textContent=res.items[i].paper;
				document.querySelector("#cb").textContent=res.items[i].category;
				document.querySelector("#pb").textContent=res.items[i].price;
				document.querySelector("#cub").textContent=res.items[i].currency;
				document.querySelector("#tb").textContent=res.items[i].tax;

			}
			else if(i==2){
				document.querySelector("#ic").textContent=res.items[i].paper;
				document.querySelector("#cc").textContent=res.items[i].category;
				document.querySelector("#pc").textContent=res.items[i].price;
				document.querySelector("#cuc").textContent=res.items[i].currency;
				document.querySelector("#tc").textContent=res.items[i].tax;

			}
			function addMore(){
				for(i=0; (i<3 && i<res.items.length);i++)
		{	j++;   
			if(i==0){
				document.querySelector("#ia").textContent=res.items[i].paper;
				document.querySelector("#ca").textContent=res.items[i].category;
				document.querySelector("#pa").textContent=res.items[i].price;
				document.querySelector("#cua").textContent=res.items[i].currency;
				document.querySelector("#ta").textContent=res.items[i].tax;

			}
			else if(i==1){
				document.querySelector("#ib").textContent=res.items[i].paper;
				document.querySelector("#cb").textContent=res.items[i].category;
				document.querySelector("#pb").textContent=res.items[i].price;
				document.querySelector("#cub").textContent=res.items[i].currency;
				document.querySelector("#tb").textContent=res.items[i].tax;

			}
			else if(i==2){
				document.querySelector("#ic").textContent=res.items[i].paper;
				document.querySelector("#cc").textContent=res.items[i].category;
				document.querySelector("#pc").textContent=res.items[i].price;
				document.querySelector("#cuc").textContent=res.items[i].currency;
				document.querySelector("#tc").textContent=res.items[i].tax;

			}


			}
		}



			
		};
		for(i=0;i<res.items.length; i++){
        	temp+=res.items[i].price+res.items[i].tax;
        }
        for(i=0;i<res.createdAt.length;i++)
        {
        	
        	if (res.createdAt[i]=="T")
        		break;
        	else{
        		da+=res.createdAt[i];
        	}
        	k++;
        }
        for(i=k+1;i<(res.createdAt.length-5);i++)
        {
        	t+=res.createdAt[i];
        }
        console.log(da);
        document.querySelector("#od").textContent=res.writer.order_id;
        
        document.querySelector("#Total").textContent=temp;

        document.querySelector("#date").textContent=da;
        document.querySelector("#time").textContent=t;
		
		

        }
        
        
    });


