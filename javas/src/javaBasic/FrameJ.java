package javaBasic;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class FrameJ extends JFrame {
	FrameJ() {
		setTitle("swing test");
		setSize(200, 200);
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		setLayout(new FlowLayout());
		JButton button1 = new JButton("test");
		
		//익명 클래스로 구현하는 방법
//		button1.addActionListener(new ActionListner() {
//			public void actionPerformed(ActionEvent e) {
//				JButton Button = (JButton)e.getSource(); // 형변환 해줘야함
//				if(Button.getText().equals("test")) {
//					Button.setText("stop");
//				} else {
//					Button.setText("test");
//
//				}
//			}
//		});
		button1.addActionListener(new MyActionListener());
		add(button1);
	}
	// 내부 클래스로 구현하는 방법
	public class MyActionListener implements ActionListener{
		public void actionPerformed(ActionEvent e) {
			JButton Button = (JButton)e.getSource(); // 형변환 해줘야함
			if(Button.getText().equals("test")) {
				Button.setText("stop");
			} else {
				Button.setText("test");

			}
		}
	}
}

//컨텐트 팬을 통해 컴포넌트 추가하는 방법
//	Container ContentPane = getContentPane();
//	ContentPane.setLayout(null);
//	JButton button = new JButton("test");
//	button.setSize(80.80);
//	button.setLocation(50,10);
//	ContentPane.add(button);