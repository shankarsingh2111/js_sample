

Q) Need to design a Low level architecture for a "Parking Facility"

- The parking lot should have multiple floors where customers can park their cars.
- The parking lot should have multiple entry and exit points.
- Customers can collect a parking ticket from the entry points and can pay the parking fee at the exit points to the parking attendant or automated exit panel
- Customers can pay via both cash and credit cards.
- The system should not allow more vehicles than the maximum capacity of the parking lot. If the parking is full, the system should be able to show a message at the entrance panel and on the parking display board on the ground floor.
- Each parking floor will have many parking spots. The system should support multiple types of parking spots such as Compact, Large, Disabled, Motorcycle, etc.
- The system should support parking for different types of vehicles like car, truck, van, motorcycle, etc.
- Each parking floor should have a display board showing any free parking spot for each spot type.
- The system should support a per-hour parking fee model. For example, customers have to pay some amount based on the Vehicle type.
- Admins should be able to add parking floors and parking spot.





- x number of parking slots with n floors
- allocation random
- charges based on time (0-3 , 3-24, 24-)

Fare: Per hr : Rs 10

Database entities:

User:
	- user_id
	- name
  - vehicle_number
  - type (car, truck, van, motorcycle)

Gate:
	- gate_id
  - gate_name

Floor:
	- floor_id
  - floor_name
  
SlotType:
	- slot_type_id
  - type_name (Compact, Large, Disabled, Motorcycle)
  
FloorSlotsAvailability
	- id
	- floor_id
  -	slot_type_id
  - total_slots
  - available_slots

ParkingSlots:
	- slot_id
  - slot_number
  - floor_id
  - status (0 : available, 1 : booked, 2 : invalid)
  - type (Compact, Large, Disabled, Motorcycle)
  
ParkingTicket:
	- ticket_id
	- user_id
  - slot_id
  - floor_id
  - entry_gate_id
  - exit_gate_id
  - start_time
  - end_time
  - status (1 : parked, 2 : freed)
  - fare (end_time-start_time/60 * fare_value)


app.use('/book_slot', createBooking);



function createBooking(req, res){

	let name = req.query.name;
  let vehicleNumber = req.query.vehicle_number;
  let vehicleType = req.query.vehicle_type;
  
  try{
  	let user = {name, vehicleNumber, vehicleType};
    let userId = 
  
  }
  catch(error){
  
  }


}









