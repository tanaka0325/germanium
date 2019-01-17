import * as React from "react"

import { addSheet } from "../actions"
import { Button } from "../components/common/Button"
import { ISheet } from "../types"
import { formatYMD } from "../utils"

interface ISheetListProps {
  sheets: ISheet[]
  addSheet: () => any
  selectSheet: (id: number) => any
}

export const SheetList = (props: ISheetListProps) => {
  const sheetItem = (sheet: ISheet) => {
    const handleOnClick = () => props.selectSheet(sheet.id)
    const d = formatYMD(new Date(sheet.created_at))
    return (
      <p key={sheet.id} onClick={handleOnClick}>
        {d}
      </p>
    )
  }
  const sheetItems = props.sheets.map(sheet => sheetItem(sheet))
  return (
    <div>
      <Button classNames={["is-fullwidth"]} handleOnClick={props.addSheet}>
        <i className="icon ion-md-add" style={style} />
      </Button>
      {sheetItems}
    </div>
  )
}

const style = {
  fontSize: "1.5rem",
}
