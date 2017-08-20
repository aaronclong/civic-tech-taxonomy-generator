import { YamlFile } from './yaml-file'

export default class Generator {

  private _fileMeta: YamlFile

  constructor (fileUrl: string) {
    this._fileMeta = new YamlFile(fileUrl)
  }
}
