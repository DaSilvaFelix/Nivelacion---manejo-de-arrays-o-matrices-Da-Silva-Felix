def main():
    persons = []  # Lista para almacenar los datos de las personas

    try:
        total_persons = int(input("Ingrese la cantidad de personas que desea registrar: "))
        for i in range(1, total_persons + 1):
            print(f"\n--- Registro de la persona n°{i} ---")
            name = input("Ingrese el nombre: ")
            age = input("Ingrese la edad: ")
            note = input("Ingrese la nota: ")

            # Agregar los datos de la persona a la lista
            persons.append({
                'name': name,
                'age': int(age),  # Convertimos la edad a número
                'note': float(note)  # Convertimos la nota a un número decimal
            })

        # Ordenar la lista por la nota de mayor a menor
        persons.sort(key=lambda x: x['note'], reverse=True)

        print("\nDatos registrados ordenados por nota (de mayor a menor):")
        # Mostrar los datos ordenados
        for index, person in enumerate(persons, start=1):
            print(f"Persona {index}: Nombre: {person['name']}, Edad: {person['age']}, Nota: {person['note']}")

    except ValueError:
        print("Por favor, ingresá valores válidos (números para edad y nota).")

if __name__ == "__main__":
    main()
