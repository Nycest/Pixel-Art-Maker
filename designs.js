        
// When size is submitted by the user, call makeGrid()
            const sizePicker = $("#sizePicker");
    sizePicker.submit(function(event){
          event.preventDefault();
//remove current table and ceate new after submit          
          $("table tr").remove();        
          makeGrid();
     });
     
//calling madeGrid function
    function makeGrid() {
// Select size input
        const width = $("#inputWeight").val();
            const height = $("#inputHeight").val();
// for loop to create the grid patterns N x M...
            for(let i = 1; i <= height; i++) {   
            const table = $("#pixelCanvas");           
          table.append("<tr></tr>");                          
        for(let j = 1; j <= width; j++) {
          $("tr").last().append("<td></td>");
            }
         }
     };
    
// applying color to the table cell when clicked.
          $("table").click(function(event) {
// Select color input
            let color = $("#colorPicker").val();
          $(event.target).css("background-color", color);            
     });
// rmoving color from grid by double clicking the cell
          $("table").dblclick(function(event){
            $(event.target).css("background", "none")
          });
        
