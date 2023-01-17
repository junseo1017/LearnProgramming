package bs;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtill {
	static final String driver = "com.mysql.jdbc.Driver"; // JDBC Driver 클래스
	static final String url = "jdbc:mysql://localhost:3306/work1";
	public static Connection getConnection() throws Exception  { // DB와 연결하는 객체
		Class.forName(driver);  // driver 클래스 로딩
		Connection con = DriverManager.getConnection(url, "root", ""); // 연결url, db id, db pw
		return con;  // db와 연결하는 클래스인 Connection을 반환
	}
}
