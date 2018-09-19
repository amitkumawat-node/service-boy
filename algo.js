/*
	R1 => Coordinates of Restaurant 1,
	R2 => Coordinates of Restaurant 2,
	C1 => Coordinates of Customer 1,
	C2 => Coordinates of Customer 2,
	D => Coordinates of Delivery boy,
	T1 => Food prepration Time Taken by Restaurant 1,
	T2 => Food prepration Time Taken by Restaurant 2,
	MAX_Travelling_time => Maximum Travelling Time between Restaurant 1 and Restaurant 2 OR Maximum Travelling Time between Customer 1 and Customer 2  

*/
var R1, R2, C1, C2, D, T1, T2, MAX_Travelling_time=10Min;

/*
	R1_data => Time and Distance between Restaurant 1 and Delivery Boy,
	R2_data => Time and Distance between Restaurant 2 and Delivery Boy,
	R1_C1_data => Time and Distance between Restaurant 1 and Customer 1,
	R2_C1_data => Time and Distance between Restaurant 2 and Customer 1,
	R1_C2_data => Time and Distance between Restaurant 1 and Customer 2,
	R2_C2_data => Time and Distance between Restaurant 2 and Customer 2,
	R1_R2_data => Time and Distance between Restaurant 1 and Restaurant 2,
	C1_C2_data => Time and Distance between Customer 1 and Customer 2
*/
function trajectory_path(R1, R2, C1, C2, D)
{
	var R1_data = find_distnace_time(R1, D);
	var R2_data = find_distnace_time(R2, D);
	var R1_C1_data = find_distnace_time(R1, C1);
	var R2_C1_data = find_distnace_time(R2, C1);
	var R1_C2_data = find_distnace_time(R1, C2);
	var R2_C2_data = find_distnace_time(R2, C2);
	var R1_R2_data = find_distnace_time(R1, R2);
	var C1_C2_data = find_distnace_time(C1, C2);
	/*
		T_R1 => Total Time taken to reach and wait time at Restaurant 1,
		T_R2 => Total Time taken to reach and wait time at Restaurant 2,
	*/
	var T_R1 = T1 + R1_data[1];
	var T_R2 = T2 + R2_data[1];
	if(R1_R2_data[1] > MAX_Travelling_time || C1_C2_data[1] > MAX_Travelling_time ) 
	{
		console.log("Delivery Boy only Deliver Single Order")
	}
	else
	{
		if(T_R1 > T_R2 )
		{
			var path_boy_to_resaurant = " Delivery boy will start travel to Restaurant 2 and then Restaurant 1";
			if(R1_C1_data[1] > R1_C2_data[1])
			{
				var path_restaurant_to_customer = "Delivery boy will travel from Restaurant 1 to  Customer 2 and than Customer 1"
			}
			else
			{
				var path_restaurant_to_customer = "Delivery boy will travel from Restaurant 1 to  Customer 1 and than Customer 2"
			}
		}
		else
		{
			var path_boy_to_resaurant = " Delivery boy will start travel to Restaurant 1 and Restaurant 2";
			if(R2_C1_data[1] > R2_C2_data[1])
			{
				var path_restaurant_to_customer = "Delivery boy will travel from Restaurant 2 to  Customer 2 and than Customer 1"
			}
			else
			{
				var path_restaurant_to_customer = "Delivery boy will travel from Restaurant 2 to  Customer 1 and than Customer 2"
			}
		}


	}


}

function find_distnace_time(cordinate1, cordinate2){
	// Distance and Time will be calculate from google map Distance Matrix Api including (Traffic and toll option) 
	return [distance, time];
}
