package javaBasic;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class MouseEventL extends JFrame {
	JPanel Panel = new JPanel();
	JLabel Label = new JLabel();

	MouseEventL() {
		setTitle("마우스 테스트");
		setSize(200, 200);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		Panel.add(Label);

		// 이벤트 리스너의 모든 메서드를 구현
//		Panel.addMouseMotionListener(new MouseMotionListener() {
//			public void mouseDragged(MouseEvent e) {
//			}
//
//			public void mouseMoved(MouseEvent e) {
//				Integer x = e.getX();
//				Integer y = e.getY();
//				String str = "X : " + x.toString() + "Y : " + y.toString();
//				Label.setText(str);
//			}
//		});

		Panel.addMouseListener(new MyMouse());
		add(Panel);
	}
	// 어댑터 클래스 구현
	public class MyMouse extends MouseAdapter {
		public void mouseClicked(MouseEvent e){
			Integer x = e.getX();
			Integer y = e.getY();
			String str = "클릭 좌표 : " + x.toString() +", " + y.toString();
			Label.setText(str);
		}
	}
}
