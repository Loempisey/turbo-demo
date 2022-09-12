import { Button, FormInput} from "ui";


export default function MyPage () {
  return (
    <div>
      <h1 className="font-bold !font-medium text-center pt-10 text-xl">
        BOOKING SCHEDULE MEETING 
      </h1>
      {/* <Button label='Create a meeting'/> */}
      <FormInput/>
    </div>
  );
}


//typscript type
// const mixed: (string | number)[] = []
// mixed.push('Pisey')
// console.log(mixed)

// let name: any[] = []
// name.push('pisey')
// name.push(20)
// console.log(name)

// const sum = (a: number, b: number) =>{
//   console.log(a+b)
// }
// sum(10, 20)







