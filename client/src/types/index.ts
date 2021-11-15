export interface ResultPayload {
    url: string,
    title: string,
};

export interface ResultAction {
    type: string,
    payload: ResultPayload
};

export interface QueryProps {
    value: string,
    handleOnChangeQueryInput: (value: string) => void
};

export interface ResultListProps {
    title: string,
    list: ResultPayload[],
    handleClick: (item: ResultPayload) => void
};

export interface SideBarState {
    sideBarList: ResultPayload[]
}