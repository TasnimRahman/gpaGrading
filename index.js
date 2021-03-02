var marks=prompt("Enter your marks : ");

        if(marks>=80 && marks<=100)
        document.write("You've got A+. Your GPA is 5.");

        else if(marks>=70 && marks<=79)
        document.write("You've got A . Your GPA is 4.");

        else if(marks>=60 && marks<=69)
        document.write("You've got A- . Your GPA is 3.5.");

        else if(marks>=50 && marks<=59)
        document.write("You've got B . Your GPA is 3.");

        else if(marks>=40 && marks<=49)
        document.write("You've got C . Your GPA is 2.");

        else if(marks>=33 && marks<=39)
        document.write("You've got D . Your GPA is 1.");

        else
        document.write("You've Failed. Best luck for next time!");
