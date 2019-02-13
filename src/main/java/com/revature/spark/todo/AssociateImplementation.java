package com.revature.spark.todo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.revature.spark.beans.Customer;
import com.revature.spark.beans.Flight;

/**
 * Within this class, you will implement the logic to calculate data for various
 * reports.
 * 
 * @author Kelby Behounek
 * 
 */
public class AssociateImplementation {

	/**
	 * Find the total ticket sales of all flights.
	 * 
	 * @param flights
	 * @return
	 */
	public Double sum(List<Flight> flights) {
		double sum = 0;
		for (int i = 0; i < flights.size(); i++) {
			sum += flights.get(i).getTicketPrice();

		}
		return sum;
	}

	/**
	 * Find the lowest ticker price.
	 * 
	 * @param flights
	 * @return
	 */

	public Double min(List<Flight> flights) {
		double minValue = flights.get(0).getTicketPrice();
		for (int i = 0; i < flights.size(); i++) {
			if (flights.get(i).getTicketPrice() < minValue) {
				minValue = flights.get(i).getTicketPrice();
			}
		}
		return minValue;
	}

	/**
	 * Find the highest ticket price.
	 * 
	 * @param flights
	 * @return
	 */
	public Double max(List<Flight> flights) {
		double maxValue = flights.get(0).getTicketPrice();
		for (int i = 0; i < flights.size(); i++) {
			if (flights.get(i).getTicketPrice() > maxValue) {
				maxValue = flights.get(i).getTicketPrice();
			}
		}
		return maxValue;
	}

	/**
	 * Find the average ticket price.
	 * 
	 * @param flights
	 * @return
	 */
	public Double avg(List<Flight> flights) {
		double result = 0;
		for (int i = 0; i < flights.size(); i++) {
			result += flights.get(i).getTicketPrice();
		}
		result = result / flights.size();
		return result;
	}

	/**
	 * Find the median ticket price.
	 * 
	 * first need to sort array bubble sort?
	 * 
	 * take length of flights if %2 need to average to middle else median is middle
	 * of array
	 * 
	 * @param flights
	 * @return
	 */
	public Double median(List<Flight> flights) {
		double newArray[] = new double[500];
		double result;
		for(int i = 0; i < flights.size(); i++) {
			newArray[i] = flights.get(i).getTicketPrice();
		}
		
		bubbleSort(newArray);
		reverse(newArray);

		if(flights.size()%2 == 0) {
			result = (newArray[(int) Math.floor(flights.size()/2 - 1)] + newArray[(int) Math.ceil(flights.size()/2)])/2;
		}else {
			result = newArray[flights.size()/2];
		}
		
		return result;
	}

	public void bubbleSort(double[] array) {
	    boolean swapped = true;
	    int j = 0;
	    double tmp;
	    while (swapped) {
	        swapped = false;
	        j++;
	        for (int i = 0; i < array.length - j; i++) {
	            if (array[i] > array[i + 1]) {
	                tmp = array[i];
	                array[i] = array[i + 1];
	                array[i + 1] = tmp;
	                swapped = true;
	            }
	        }
	    }
	}
	
	public void reverse(double[] array) {
		for(int i = 0; i < array.length / 2; i++)
		{
		    double temp = array[i];
		    array[i] = array[array.length - i - 1];
		    array[array.length - i - 1] = temp;
		}
	}

	/**
	 * !! BONUS CHALLENGE REQUIREMENT !!
	 * 
	 * Find the total sales for each customer given a list of Flights.
	 * 
	 * Let's look at some example data:
	 * 
	 * Flights FlightNo | Destination | Departs | Ticket Price | Customer 1 |
	 * Albuquerque | Austin | $150 | A 2 | Denver | Seattle | $210 | B 3 | Dallas |
	 * Orlando | $190 | B 4 | Las Vegas | Houston | $300 | C 5 | Phoenix | Atlanta |
	 * $340 | A 6 | Tampa | New York| $270 | C -----------------------------------
	 * Results: Customer A : $490 Customer B : $400 Customer C : $570
	 * 
	 * @param flights
	 * @return
	 */
	public Map<Customer, Double> totalSalesPerCustomer(List<Flight> flights) {
		return new HashMap<>();
	}

}
