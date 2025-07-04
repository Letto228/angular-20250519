export interface CarouselContext<Data> {
    $implicit: Data;
    index: number;
    next: () => void;
    back: () => void;
}
