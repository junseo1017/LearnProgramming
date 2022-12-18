package employee;

import java.util.ArrayList;
import java.util.Scanner;

public class Employees {
	static ArrayList record = new ArrayList();
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		while(true) {
			switch (displayMenu()) {
			case 1 :
				inputR();
				break;
			case 2 :
//				deleteR();
				break;
			case 3 : 
//				sortR();
				break;
			case 4 :
				System.out.println("프로그램 종료");
			System.exit(0);
			}
		}	
	}
	static int displayMenu () {
		System.out.println("1. 성적 입력");
		System.out.println("2. 성적 삭제");
		System.out.println("3. 성적 정렬 출력");
		System.out.println("4. 프로그램 종료");
		int menu = 0;
		
		do {
			try {
				menu = Integer.parseInt(sc.nextLine());
				if(menu>=1 && menu<=4) {
					break;
				} else {
					throw new Exception();
				}
			} catch (Exception e) {
				System.out.println("에러 발생");
				System.out.println("1-4 입력 필요");
			}
		} while(true);
		return menu;
	}
	static void inputR () {
		System.out.println("1. 성적 입력");
		System.out.println(",로 구분하여 이름 사번 중간시험 기말시험 입력");
		System.out.println("'q'입력시 초기화면");
		
		while(true) {
			do {
				try {
					String input = sc.nextLine().trim();
					if(input.equalsIgnoreCase("q")) {
						return;
					} else {
						Scanner sc2 = new Scanner(input).useDelimiter(",");
						
						record.add(new Employee(sc2.next(),sc2.next(),sc2.nextInt(),sc2.nextInt()));
						System.out.println("입력을 마치려면 q 입력");
						displayR();
						break;
					}
				} catch (Exception e) {
					System.out.println("입력 오류 다시 입력 바람");
					break;
				}
			} while(true);
		}
	}
	static void displayR () {
		int halfTotal = 0;
		int finalTotal = 0;
		int total = 0;
		
		System.out.println();
		System.out.println("===성적 보기===");
		int length = record.size();
		if(length > 0) {
			for(int i = 0;i<length;i++) {
				Employee emp = (Employee)record.get(i);
				System.out.println("이름 : " + emp.name);
			}
		} else {
			System.out.println("입력된 값이 없습니다.");
		}
	}
}
