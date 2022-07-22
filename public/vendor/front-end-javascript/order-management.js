function orderUpdate(action,orderId,prodId){
       
    $.ajax({
          url:'/vendor/order-updation/'+action+'/'+orderId+'/'+prodId,
          method:'get',
          success:(response)=>{
          
              if(response.demoQty==='new'||response.demoQty==='wishadd'){
               let count=document.getElementById("countId").innerText
               count=parseInt(count)+1
               document.getElementById("countId").innerText=count
               Swal.fire({
                icon: 'success',
                title: 'New product added',
                text: 'You can countinue shopping',
              })

              // if(response.demoQty==='wishadd')
              // $('#rlWish').load(`${location.href} #rlWish`)
              
              }
              if(response.demoQty==='existingAdded'){
                $('#rlItem').load(`${location.href} #rlItem`)
                

                // Swal.fire({
                //     icon: 'success',
                //     title: 'Quantity increased',
                //     text: 'You can countinue shopping',
                //   })
              }
              if(response.demoQty==='existingRemoved'){
                
                // let qty=document.getElementById("qtyId").innerText
                // qty=parseInt(qty)-1
                // document.getElementById("qtyId").innerText=qty
                // let price=document.getElementById("priceId").innerText
                // total=parseInt(price)*qty
                // document.getElementById("totalId").innerText=total
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Quantity decreased',
                //     text: 'You can countinue shopping',
                //   })
               
            
              $('#rlItem').load(`${location.href} #rlItem`)
            
                   
                
            
              }
              if(response.demoQty==='deleted'){
                let count=document.getElementById("countId").innerText
                count=parseInt(count)-1
                document.getElementById("countId").innerText=count
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Deleted from cart',
                //     text: 'You can countinue shopping',
                //   })
                $('#rlItem').load(`${location.href} #rlItem`)
              }
          }
      })

      return false
} 