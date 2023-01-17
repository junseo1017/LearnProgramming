package bs.models;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;

import bs.DBUtill;

public class EmployeeDAO {

	public EmployeeVO getEmployeeregister(EmployeeVO evo) throws Exception { // 직원 생성 메서드
		String dml = "insert into employee" + " (name,jobGrade,department,email)" + "values " + "(?, ?, ?, ?)";
		// 바인딩 변수 선언하여 입력한 값이 바인딩 변수에 대입되도록 선언
		Connection con = null;
		PreparedStatement pstmt = null;
		// 바인딩 변수를 사용할 때 필요

		
		EmployeeVO retval = null;

		try {
			con = DBUtill.getConnection();
			// DB 연결
			pstmt = con.prepareStatement(dml);
			pstmt.setString(1, evo.getName());
			pstmt.setString(2, evo.getJobGrade());
			pstmt.setInt(3, evo.getDepartment());
			pstmt.setString(4, evo.getEmail());
			// EmployeeVO 클래스형 매개변수 evo의 멤버 변수는 private로 설정되어 있기 때문에 getter를 이용하여 값 추출

			int i = pstmt.executeUpdate();
			// 쿼리문 실행한 결과값 (반영된 레코드 건수)
			
			retval = new EmployeeVO();
			retval.setStatus(i + ""); 
		} catch (SQLException e) {
			System.out.println("error : " + e);
		} catch (Exception e) {
			System.out.println("error : " + e);
		} finally {
			try {
				if (pstmt != null) {
					pstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {

			}
		}
		return retval;
	}

	public EmployeeVO getEmployeeCheck(int no, String name) throws Exception { // 조건부 직원 조회 메서드
		String dml = "select * from employee where no = ? and name = ?";
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		// query 실행했을 때 반환값을 담기 위한 참조변수
		EmployeeVO retval = null;

		try {
			con = DBUtill.getConnection();
			pstmt = con.prepareStatement(dml);
			pstmt.setInt(1, no);
			pstmt.setString(2, name);

			rs = pstmt.executeQuery();
	
			if (rs.next()) { 
				retval = new EmployeeVO(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getString(5));
			}
			// rs.next()가 true인 경우 == 정상적으로 query가 동작해서 select된 값을 가져온 경우
			// EmployeeVO 생성자 함수 실행
		} catch (SQLException e) {
			System.out.println("error : " + e);
		} catch (Exception e) {
			System.out.println("error : " + e);
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (pstmt != null) {
					pstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {

			}
		}
		return retval;
	}

	public EmployeeVO getEmployeeNo(int no) throws Exception { // 조건부 직원 조회 
		String dml = "select * from employee where no = ?";
		Connection con = null;
		PreparedStatement pstmt = null; 
		// 바인딩 변수 사용하기 위해 필요
		ResultSet rs = null;
		EmployeeVO retval = null;

		try {
			con = DBUtill.getConnection();
			pstmt = con.prepareStatement(dml);
			pstmt.setInt(1, no);
			// 바인딩 변수에 매개변수no 대입
			rs = pstmt.executeQuery();
			if (rs.next()) {
				retval = new EmployeeVO(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getString(5));
			}
		} catch (SQLException e) {
			System.out.println("error : " + e);
		} catch (Exception e) {
			System.out.println("error : " + e);
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (pstmt != null) {
					pstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {

			}
		}
		return retval;
	}

	public EmployeeVO getEmployeeName(String name) throws Exception {
		String dml = "select * from employee where name = ?";
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		EmployeeVO retval = null;

		try {
			con = DBUtill.getConnection();
			pstmt = con.prepareStatement(dml);
			pstmt.setString(1, name);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				retval = new EmployeeVO(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getString(5));
			}
		} catch (SQLException e) {
			System.out.println("error : " + e);
		} catch (Exception e) {
			System.out.println("error : " + e);
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (pstmt != null) {
					pstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {

			}
		}
		return retval;
	}

	public ArrayList<EmployeeVO> getEmployeetotal() { // 모든 직원 조회
		ArrayList<EmployeeVO> list = new ArrayList<EmployeeVO>(); // 직원 레코드들이 담길 배열 선언
		String tml = "select * from employee"; 
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		EmployeeVO emVo = null;

		try {
			con = DBUtill.getConnection();
			pstmt = con.prepareStatement(tml);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				// rs.next()가 true인 경우 == 가져올 record가 있는 경우.
				// 반복문을 통해 모든 레코드의 값을 읽고 생성자 함수로 객체 생성하여 list 배열에 add
				emVo = new EmployeeVO(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getString(5));
				list.add(emVo);
			}

			System.out.println(list.size());
		} catch (SQLException e) {
			System.out.println("error : " + e);
		} catch (Exception e) {
			System.out.println("error : " + e);
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (pstmt != null) {
					pstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {

			}
		}

		return list;
	}

	public ArrayList<String> getColumnName() { // 속성값 조회
		ArrayList<String> columnName = new ArrayList<String>(); // 속성값이 담길 배열 선언
		String sql = "select * from employee";
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ResultSetMetaData rsmd = null;
		// ResultSet은 저장된 데이터를 담는 객체라면
		// ResultSetMetaData는 저장된 데이터에 대한 정보를 가지는 데이터를 담는 객체
		// 속성값을 담아야 하기 때문에 ResultSetMetaData형 참조변수 선언

		try {
			con = DBUtill.getConnection();
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			rsmd = rs.getMetaData();
			// 쿼리문을 실행해서 반환된 결과값의 metadata 가져오기

			int cols = rsmd.getColumnCount();
			// 속성값의 개수를 변수에 저장

			
			for (int i = 1; i <= cols; i++) {
				columnName.add(rsmd.getColumnName(i));
			}
			// 속성값을 모두 넣어주기 위해 속성값의 갯수만큼 반복하면서 가져온 metaData를 columnName 배열에 추가시켜준다. 

		} catch (SQLException e) {
			System.out.println("error : " + e);
		} catch (Exception e) {
			System.out.println("error : " + e);
		} finally {
			try {
				if (rs != null) {
					rs.close();
				}
				if (pstmt != null) {
					pstmt.close();
				}
				if (con != null) {
					con.close();
				}
			} catch (SQLException e) {

			}
		}
		return columnName;
	}

}
