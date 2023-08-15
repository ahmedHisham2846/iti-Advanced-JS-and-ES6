var b = 100;

const foo = () => {
  b = 200;
  return () => {
    console.log(b);
  };
};

foo()();
