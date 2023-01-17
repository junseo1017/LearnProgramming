package javaBasic;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class KeyEventL extends JFrame {
	JPanel Panel = new JPanel();
	JLabel Label1 = new JLabel();
	JLabel Label2 = new JLabel();

	KeyEventL() {
		setTitle("키입력 테스트");
		setSize(400, 400);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		Panel.setLayout(null);
		Label1.setLocation(20, 20);
		Label1.setSize(120, 20);
		Label1.setText("문자 키");

		Label2.setLocation(20, 60);
		Label2.setSize(120, 20);
		Label2.setText("기능 키");

		Panel.add(Label1);
		Panel.add(Label2);
		Panel.addKeyListener(new MyKeyListener());

		add(Panel);
		Panel.requestFocus(true);
	}

	public class MyKeyListener extends KeyAdapter {
		public void keyPressed(KeyEvent e) {
			char cKey = e.getKeyChar();

			if (cKey == e.CHAR_UNDEFINED) {
				String str = "기능 키 :" + e.getKeyText(e.getKeyCode());
				Label2.setText(str);
			} else {
				String str = "문자 키 : " + cKey;
				Label1.setText(str);
			}
		}
	}
}
