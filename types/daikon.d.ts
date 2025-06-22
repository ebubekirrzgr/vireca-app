// types/daikon.d.ts
declare module 'daikon' {
  export const Series: {
    parseImage: (data: DataView) => {
      getInterpretedData: () => Uint8Array;
      getCols: () => number;
      getRows: () => number;
    };
  };
}
