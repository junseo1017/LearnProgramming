package employee;

public class Employee {
	String name = "";
	String id = "";
	int halfT = 0;
	int finalT = 0;
	int total = 0;

	Employee(String id, String name, int halfT, int finalT) {
		this.id = id;
		this.name = name;
		this.halfT = halfT;
		this.finalT = finalT;
		this.total = halfT + finalT;
	}
}
