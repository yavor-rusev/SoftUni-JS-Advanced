function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let restaurantsInputRef = document.querySelector("#inputs textarea");
   let bestRestaurantOutputRef = document.querySelector("#bestRestaurant p");
   let workersOutputRef = document.querySelector("#workers p");

   let result = {};

   function onClick() {
      let restaurantsInfoArray = JSON.parse(restaurantsInputRef.value);

      for (let restaurantInfo of restaurantsInfoArray) {
         let restaurantName = restaurantInfo.split(' - ')[0];
         createRestaurantObj(restaurantInfo);
         createWorkersArray(restaurantInfo);
         updateSalaries(restaurantName);
      }

      let bestRestaurantTuple = findBestRestaurant(result);
      showOutputs(bestRestaurantTuple, workersSorted(bestRestaurantTuple));
   }

   function createRestaurantObj(restaurantData) {
      let restaurantName = restaurantData.split(' - ')[0];

      if (!result.hasOwnProperty(restaurantName)) {
         result[restaurantName] = {
            avgSalary: 0,
            bestSalary: 0,
            workers: []
         }
      }
   }

   function createWorkersArray(restaurantData) {
      let [restaurantName, personnel] = restaurantData.split(' - ');
      let workersMatrix = personnel.split(', ').map(x => x.split(' '));

      result[restaurantName].workers.push(...workersMatrix);
   }

   function updateSalaries(restaurant) {
      let workersMatrix = result[restaurant].workers;
      let sumOfSalaries = 0;

      for (let workerTuple of workersMatrix) {
         let currSalary = Number(workerTuple[1]);
         sumOfSalaries += currSalary;

         if (currSalary > result[restaurant].bestSalary) {
            result[restaurant].bestSalary = currSalary;
         }
      }

      result[restaurant].avgSalary = currSalary / workersMatrix.length;
   }

   function findBestRestaurant(restaurantsObj) {
      let restaurantsMatrix = Object.entries(restaurantsObj);
      return restaurantsMatrix.sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
   }

   function workersSorted(bestRestaurantTuple) {
      return bestRestaurantTuple[1].workers.sort((a, b) => b[1] - a[1]);
   }

   function showOutputs(bestRestaurantTuple, bestRestaurantWorkersSorted) {
      bestRestaurantOutputRef.textContent = `Name: ${bestRestaurantTuple[0]} Average Salary: ${(bestRestaurantTuple[1].avgSalary).toFixed(2)} Best Salary: ${(bestRestaurantTuple[1].bestSalary).toFixed(2)}`

      let buffer = '';

      for (let workerTuple of bestRestaurantWorkersSorted) {
         buffer += `Name: ${workerTuple[0]} With Salary: ${workerTuple[1]} `
      }

      workersOutputRef.textContent = buffer;
   }
}