import { FileMetaData } from './meta-data'

export default class Generator {

  private _fileMeta: FileMetaData

  constructor (fileUrl: string) {
    this._fileMeta = new FileMetaData(fileUrl)
  }
}
