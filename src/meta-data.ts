export class FileMetaData {
  private _fileUrl: string
  private _lastModified: Date
  private _valid: boolean

  constructor (fileUrl: string) {
    this._fileUrl = fileUrl
  }
}
