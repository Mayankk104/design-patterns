export default interface Observer {
    observerId: string
    update: () => void;
}