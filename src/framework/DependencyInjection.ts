class DependencyInjection {
  dictionary: Map<string, any> = new Map();

  set(name: string, value: any) {
    this.dictionary.set(name, value);
  }

  get(name: string) {
    return this.dictionary.get(name);
  }
}

const x = new DependencyInjection();

export default x;
