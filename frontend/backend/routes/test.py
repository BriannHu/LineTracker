
def main():
    x = int(input("Int x: "))
    print(Mystery(x))


def Mystery(n):
    if n == 1:
        return 1
    else:
        x = Mystery(n/2)
        print(f"x : {x}\nn : {n}")
        print(f"n + x: {n + x}")
        return n + x


if __name__ == "__main__":
    main()