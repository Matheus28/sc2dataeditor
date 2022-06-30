import { ValueSource } from "../../lib/game_data_access";
import { unreachable } from "../../lib/utils";

export function valueSourceToClassName(v:ValueSource|undefined):string {
	if(v === undefined) return "";
	if(v == ValueSource.Self) return "source-self table-success";
	if(v == ValueSource.Default) return "source-default table-primary";
	if(v == ValueSource.Parent) return "source-parent table-warning";
	unreachable(v);
}

export function valueSourceToVariant(v:ValueSource):string {
	if(v == ValueSource.Self) return "success";
	if(v == ValueSource.Default) return "primary";
	if(v == ValueSource.Parent) return "warning";
	unreachable(v);
}
