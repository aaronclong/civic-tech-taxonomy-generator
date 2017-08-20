import fs from 'fs'
import YAML from 'yamljs'

export class YamlFile {
  private readonly _fileUrl: string

  constructor (fileUrl: string) {
    this._fileUrl = fileUrl
    if (!this.__doesExist(fileUrl)) {
      throw new Error("The Yaml file is missing")
    }
  }

  __doesExist (file: string): boolean {
    return fs.statSync(file).isFile()
  }

  openFile (): any {
    return YAML.load(this._fileUrl)
  }
}
