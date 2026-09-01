/**
 * Hello World Java程序
 * 这是一个简单的Java入门示例
 */
public class HelloWorld {
    
    // 主方法 - 程序入口
    public static void main(String[] args) {
        // 打印Hello World
        System.out.println("=================================");
        System.out.println("     Hello World! 👋             ");
        System.out.println("=================================");
        System.out.println();
        
        // 显示欢迎信息
        System.out.println("欢迎来到Java世界！");
        System.out.println("这是一个简单的Hello World程序");
        System.out.println();
        
        // 打印系统信息
        System.out.println("--- 系统信息 ---");
        System.out.println("Java版本: " + System.getProperty("java.version"));
        System.out.println("操作系统: " + System.getProperty("os.name"));
        System.out.println("用户名: " + System.getProperty("user.name"));
        System.out.println();
        
        // 演示变量和数据类型
        System.out.println("--- 变量演示 ---");
        int age = 25;
        String name = "Kiro";
        double score = 98.5;
        boolean isStudent = true;
        
        System.out.println("姓名: " + name);
        System.out.println("年龄: " + age);
        System.out.println("成绩: " + score);
        System.out.println("是学生: " + isStudent);
        System.out.println();
        
        // 演示数组
        System.out.println("--- 数组演示 ---");
        String[] fruits = {"苹果", "香蕉", "橙子", "葡萄"};
        System.out.print("水果列表: ");
        for (String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        System.out.println();
        System.out.println();
        
        // 演示方法调用
        System.out.println("--- 方法演示 ---");
        HelloWorld hello = new HelloWorld();
        hello.sayHello("Java");
        hello.calculate(10, 20);
        
        System.out.println("=================================");
        System.out.println("     程序执行完成！            ");
        System.out.println("=================================");
    }
    
    // 自定义方法 - 打招呼
    public void sayHello(String language) {
        System.out.println("你好，" + language + "！");
    }
    
    // 自定义方法 - 简单计算
    public void calculate(int a, int b) {
        System.out.println(a + " + " + b + " = " + (a + b));
        System.out.println(a + " - " + b + " = " + (a - b));
        System.out.println(a + " × " + b + " = " + (a * b));
        System.out.println(a + " ÷ " + b + " = " + (a / b));
    }
}