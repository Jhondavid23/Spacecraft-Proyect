

//Principal class

class spacescraft{
   
    constructor(name, type, speed, fuel){
        this.name = name;
        this.type = type
        this.speed = speed,
        this.fuel = fuel;
    }

}


//Interface class
class UI{
    
    addSpacecraft(List){
        const spacecraftList = document.getElementById('spacecraft-list')
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class ="card-body">
                    <strong>Name</strong>: ${List.name}
                    <strong>Type</strong>: ${List.type}
                    <strong>Speed or power</strong>: ${List.speed}
                    <strong>Fuel</strong>: ${List.fuel}
                    <a href="#" class="btn btn-primary" name="delete">Delete</a>
                </div>
            </div>    
        `;
        spacecraftList.appendChild(element)
    }

    resetForm(){
        document.getElementById('List-form').reset();
    }

    deleteSpacecraft(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Spacecraft Deleted Successfully', 'info')
        }
    }

    //Show message in DOM
    showMessage(mensaje, cssClass){
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass} mt-2` ;
        div.appendChild(document.createTextNode(mensaje))
        //Showing in DOM
        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 2000)
    }
}

//DOM EVENTS
document.getElementById('List-form').addEventListener('submit', function(event){

    //Getting Form Values
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const speed = document.getElementById('speed').value;
    const fuel = document.getElementById('fuel').value;

    // Create a new object Spacecraft
    const List = new spacescraft(name, type, speed, fuel);
    
    //Create a new UI instance

    const ui = new UI();

    //Imput user validation

    if(name === '' || type==='' || speed==='' || fuel===''){
        ui.showMessage('Complete Fields', 'danger')
    }
    
    // Save a object

    ui.addSpacecraft(List);
    ui.resetForm();
    ui.showMessage('Spacecraft Added Successfully', 'success')
    
    event.preventDefault();

})

document.getElementById('spacecraft-list').addEventListener('click', function(event){
   const iu = new UI();
   iu.deleteSpacecraft(event.target)
   event.preventDefault();

})

