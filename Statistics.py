import pandas as pd
import matplotlib.pyplot as plt
def collect_data():
    print("Enter the amount of each type of trash collected:")
    plastic_bottles = int(input("Plastic Bottles: "))
    glass_bottles = int(input("Glass Bottles: "))
    cigarette_butts = int(input("Cigarette Butts: "))
    plastic_bags = int(input("Plastic Bags: "))

    return {
        "Plastic Bottles": plastic_bottles,
        "Glass Bottles": glass_bottles,
        "Cigarette Butts": cigarette_butts,
        "Plastic Bags": plastic_bags
    }

def display_statistics(data):
    df = pd.DataFrame(data, index=[0])
    df.plot(kind='bar')
    plt.title("Beach Trash Statistics")
    plt.ylabel("Quantity")
    plt.show()

def main():
    data = collect_data()
    display_statistics(data)

if __name__ == "__main__":
    main()